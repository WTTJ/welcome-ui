/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

import generateModule from '@babel/generator'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'
import prettier from 'prettier'

import { getModule } from './esm.mjs'
import { userInputInterface } from './index.mjs'
import { getStackClassnames } from './parsing.mjs'
import { transformValue, valueMap } from './transform.mjs'

const traverse = getModule(traverseModule)
const generate = getModule(generateModule)

// Read .prettierrc once at module load
let prettierConfig = {}
try {
  const prettierRcPath = path.resolve(process.cwd(), '.prettierrc')
  prettierConfig = JSON.parse(fs.readFileSync(prettierRcPath, 'utf8'))
} catch (e) {
  console.error('Prettier config not read', e)
  prettierConfig = {}
}

const COMPONENTS_TO_REPLACE = ['Box', 'Flex', 'Grid', 'Stack']

const PROPS_WHITELIST = [
  'aria-label',
  'as',
  'data-testid',
  'href',
  'id',
  'key',
  'ref',
  'rel',
  'src',
  'style',
  'target',
]

/**
 * Main migration routine: preview or interactively replace found components in files.
 * - Groups found components by file
 * - For each file, processes and optionally replaces components
 * - Handles user interaction for each component if shouldReplace is true
 */
export async function processComponents(components, shouldReplace = false, verbose = false) {
  if (components.length === 0) {
    console.log('No migrated components found.')
    userInputInterface.close()
    return
  }

  const fileChanges = {}
  const componentsByFile = {}

  // Group components by file for efficient processing
  components.forEach(component => {
    if (!componentsByFile[component.file]) {
      componentsByFile[component.file] = []
    }
    componentsByFile[component.file].push(component)
  })

  console.log(shouldReplace ? '🔄 Interactive  component replacement...' : '👀 Preview mode:')
  console.log('====================')

  let totalProcessed = 0
  let totalReplaced = 0
  let totalSkipped = 0

  // Process each file and its found components

  for (const [filePath, fileComponents] of Object.entries(componentsByFile)) {
    let content = fs.readFileSync(filePath, 'utf8')
    let ast
    try {
      ast = parse(content, { plugins: ['jsx', 'typescript'], sourceType: 'module' })
    } catch (e) {
      console.error('Failed to parse file:', filePath, e)
      continue
    }

    // Map for quick lookup of components to migrate in this file
    const componentLookup = new Map()
    fileComponents.forEach(c => {
      componentLookup.set(c.matchIndex, c)
    })

    // Collect all transformable JSXElement paths
    const transformable = []
    traverse(ast, {
      JSXElement(path) {
        const opening = path.node.openingElement
        const start = opening.start
        const component = componentLookup.get(start)
        if (component) {
          transformable.push({ component, path })
        }
      },
    })

    // Process each transformable node sequentially (async)
    for (let i = 0; i < transformable.length; i++) {
      const { component, path } = transformable[i]
      const opening = path.node.openingElement
      const closing = path.node.closingElement

      totalProcessed++
      let classnames = []
      let valuesNotTransformed = []

      if (component.componentType === 'Flex') classnames.push('flex')
      if (component.componentType === 'Grid') classnames.push('grid')

      const componentProps = Object.entries(component.props)

      componentProps.forEach(([key, propData]) => {
        const value = propData.value
        const transformedValue = transformValue(key, value)
        if (
          transformedValue === undefined &&
          !key.startsWith('on') &&
          !PROPS_WHITELIST.includes(key)
        ) {
          const displayValue = propData.isExpression ? `{${value}}` : `"${value}"`
          valuesNotTransformed.push(`${key}=${displayValue}`)
        }
        if (transformedValue) classnames.push(transformedValue)
      })

      if (component.componentType === 'Stack') {
        classnames = getStackClassnames(classnames)
      }

      let element
      if (COMPONENTS_TO_REPLACE.includes(component.componentType)) {
        element = (component.props.as && component.props.as.value) || 'div'
      } else {
        element = component.componentType
      }

      // Only print transformation details if in interactive mode or verbose mode
      if (shouldReplace || verbose) {
        console.log(`\n🕵️‍♀️ [${i + 1}/${transformable.length}] Line ${component.line}`)
        console.log('━━━━━━━━━━━━━━━━')
        const displayProps = {}
        componentProps.forEach(([key, propData]) => {
          displayProps[key] = propData.isExpression ? `{${propData.value}}` : propData.value
        })
        console.log('📦 Component:', component.componentType)
        console.log('📋 Properties:', JSON.parse(JSON.stringify(displayProps, null, 2)))
        console.log('👀 Transformed:', element)
        if (valuesNotTransformed.length > 0) {
          console.log(`❌ Values not transformed: ${valuesNotTransformed.join(', ')}`)
        }
      }

      // Interactive replacement mode
      let doTransform = true
      if (shouldReplace) {
        const action = await promptUserForAction()
        if (action === 'quit') {
          console.log('\n🛑 Script stopped by user.')
          userInputInterface.close()
          process.exit(1)
        } else if (action === 'skip') {
          console.log('⏭️  Skipped this component.')
          totalSkipped++
          doTransform = false
        } else if (action === 'replace') {
          doTransform = true
          totalReplaced++
        } else {
          console.log('❓ Invalid choice. Skipping this component.')
          totalSkipped++
          doTransform = false
        }
      }

      if (doTransform) {
        // Update the tag name in the AST
        opening.name = { name: element, type: 'JSXIdentifier' }
        if (closing) closing.name = { name: element, type: 'JSXIdentifier' }

        // Use helper to build new attributes
        opening.attributes = buildAttributes(component, classnames)
      }
    }

    // If we're in replace mode, generate and store the transformed file output (but don't write yet)
    if (shouldReplace) {
      let output
      try {
        output = generate(ast, { retainLines: true }, content).code
        // Format with Prettier using cached .prettierrc config
        const parser =
          filePath.endsWith('.ts') || filePath.endsWith('.tsx') ? 'typescript' : 'babel'
        output = await prettier.format(output, { ...prettierConfig, parser })
        fileChanges[filePath] = output
        // Only log here, don't write yet
        console.log(`✅ Ready to update: ${filePath}`)
      } catch (err) {
        console.error(`❌ Error formatting or preparing file ${filePath}:`, err)
      }
    }
  }

  // Write all changes to disk if in replace mode
  if (shouldReplace && Object.keys(fileChanges).length > 0) {
    console.log('\n💾 Saving changes to files...')
    for (const [filePath, content] of Object.entries(fileChanges)) {
      try {
        await fs.promises.writeFile(filePath, content, 'utf8')
        console.log(`✅ Updated: ${filePath}`)
      } catch (err) {
        console.error(`❌ Error writing file ${filePath}:`, err)
      }
    }
  }

  // Show summary
  console.log('\n📊 Summary:')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`📦 Total components processed: ${totalProcessed}`)
  if (shouldReplace) {
    console.log(`✅ Components replaced: ${totalReplaced}`)
    console.log(`⏭️  Components skipped: ${totalSkipped}`)
    console.log(`📁 Files updated: ${Object.keys(fileChanges).length}`)
  }

  if (!shouldReplace) {
    console.log('\n💡 Use --replace to start interactive replacement mode')
  }

  userInputInterface.close()
}

/**
 * Helper for interactive CLI: ask the user a question and resolve their answer.
 */
function askUser(question) {
  // In test mode, always return 'r' to auto-replace
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve('r')
  }

  return new Promise(resolve => {
    userInputInterface.question(question, answer => {
      resolve(answer.toLowerCase().trim())
    })
  })
}

/**
 * Helper to build new attributes array for a JSX element, including className and other props.
 */
function buildAttributes(component, classnames) {
  const newAttributes = []
  if (classnames.length > 0) {
    newAttributes.push({
      name: { name: 'className', type: 'JSXIdentifier' },
      type: 'JSXAttribute',
      value: {
        type: 'StringLiteral',
        value: classnames.sort().join(' '),
      },
    })
  }

  // Set for quick lookup
  const availableTransormers = new Set(Object.keys(valueMap))

  Object.entries(component.props).forEach(([key, propData]) => {
    if (key === 'as' && COMPONENTS_TO_REPLACE.includes(component.componentType)) return
    if (availableTransormers.has(key)) return
    if (propData.isSpread) {
      newAttributes.push({
        argument: { name: propData.value, type: 'Identifier' },
        type: 'JSXSpreadAttribute',
      })
      return
    }
    if (
      typeof propData.value === 'boolean' ||
      propData.value === 'true' ||
      propData.value === 'false'
    ) {
      if (propData.value === true || propData.value === 'true') {
        newAttributes.push({
          name: { name: key, type: 'JSXIdentifier' },
          type: 'JSXAttribute',
          value: null,
        })
      }
      return
    }
    if (propData.isExpression) {
      // Modal.Content deprecation: intercept 'store' prop
      if (component.componentType === 'Modal.Content' && key === 'store') {
        return
      }
      newAttributes.push({
        name: { name: key, type: 'JSXIdentifier' },
        type: 'JSXAttribute',
        value: {
          expression: { name: propData.value, type: 'Identifier' },
          type: 'JSXExpressionContainer',
        },
      })
      return
    }
    newAttributes.push({
      name: { name: key, type: 'JSXIdentifier' },
      type: 'JSXAttribute',
      value: { type: 'StringLiteral', value: propData.value },
    })
  })
  return newAttributes
}

/**
 * Helper for interactive CLI: prompt the user for an action on a component.
 * Returns 'replace', 'skip', or 'quit'.
 */
async function promptUserForAction() {
  console.log('\n🤔 What would you like to do?')
  console.log('  r) Replace this component')
  console.log('  s) Skip this component')
  console.log('  q) Quit the script')
  const answer = await askUser('Your choice (r/s/q): ')
  if (answer === 'q' || answer === 'quit') return 'quit'
  if (answer === 's' || answer === 'skip') return 'skip'
  if (answer === 'r' || answer === 'replace') return 'replace'
  return 'invalid'
}
