/* eslint-disable no-console */
import fs from 'fs'

import { userInputInterface } from './index.mjs'
import { getStackClassnames } from './parsing.mjs'
import { transformValue, valueMap } from './transform.mjs'

const COMPONENTS_TO_REPLACE = ['Box', 'Flex', 'Grid', 'Stack']

/**
 * Main migration routine: preview or interactively replace found components in files.
 * - Groups found components by file
 * - For each file, processes and optionally replaces components
 * - Handles user interaction for each component if shouldReplace is true
 */
export async function processComponents(components, shouldReplace = false) {
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
    let fileModified = false

    // Sort components by position (reverse order to maintain indices when replacing)
    fileComponents.sort((a, b) => b.matchIndex - a.matchIndex)

    console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`🔵 Processing file: ${filePath}`)
    console.log(`Found ${fileComponents.length} component(s)`)

    // Process each found component in the file
    for (let i = 0; i < fileComponents.length; i++) {
      const component = fileComponents[i]
      totalProcessed++

      let classnames = []
      let valuesNotTransformed = []

      // Add base classnames for Flex/Grid
      if (component.componentType === 'Flex') {
        classnames.push('flex')
      }
      if (component.componentType === 'Grid') {
        classnames.push('grid')
      }

      // Transform each prop and collect classnames
      Object.entries(component.props).forEach(([key, propData]) => {
        const value = propData.value
        const transformedValue = transformValue(key, value)

        // Skip event handlers and special props from being marked as "not transformed"
        if (
          transformedValue === undefined &&
          !key.startsWith('on') &&
          ![
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
          ].includes(key)
        ) {
          const displayValue = propData.isExpression ? `{${value}}` : `"${value}"`
          valuesNotTransformed.push(`${key}=${displayValue}`)
        }

        if (transformedValue) classnames.push(transformedValue)
      })

      // Special handling for Stack component to ensure flex and direction classes
      if (component.componentType === 'Stack') {
        classnames = getStackClassnames(classnames)
      }

      // Determine the element to use:
      // - If componentType is in COMPONENTS_TO_REPLACE (Box, Flex, Grid, Stack), use 'div' (or as prop)
      // - Otherwise, keep the original componentType (including subcomponents)
      let element
      if (COMPONENTS_TO_REPLACE.includes(component.componentType)) {
        element = (component.props.as && component.props.as.value) || 'div'
      } else {
        element = component.componentType
      }
      // Build other props string, filtering out migrated props
      const otherProps = Object.entries(component.props)
        .filter(([key, propData]) => {
          // Remove 'as' prop for components being converted to div
          if (key === 'as') {
            return !COMPONENTS_TO_REPLACE.includes(component.componentType)
          }
          // Always keep spread attributes
          if (propData.isSpread) return true
          return !Object.keys(valueMap).includes(key)
        })
        .map(([key, propData]) => {
          const value = propData.value
          if (propData.isSpread) {
            return ` {...${value}}`
          }
          // Special handling for boolean props (e.g. required)
          if (typeof value === 'boolean' || value === 'true' || value === 'false') {
            if (value === true || value === 'true') {
              return ` ${key}`
            } else {
              return ''
            }
          }
          if (propData.isExpression) {
            // Escape any accidental closing braces in the value
            const safeValue = value.replace(/}/g, '\u007d')
            return ` ${key}={` + safeValue + `}`
          }
          return ` ${key}="${value}"`
        })
        .join('')

      const classAttribute =
        classnames.length > 0 ? ` className="${classnames.sort().join(' ')}"` : ''
      const transformedElement = `<${element}${classAttribute}${otherProps}>`

      // Show transformation details for user
      console.log(`\n🕵️‍♀️ [${i + 1}/${fileComponents.length}] Line ${component.line}`)
      console.log('━━━━━━━━━━━━━━━━')
      console.log(component.props)

      // Convert props back to display format for readable output
      const displayProps = {}
      Object.entries(component.props).forEach(([key, propData]) => {
        displayProps[key] = propData.isExpression ? `{${propData.value}}` : propData.value
      })
      console.log('📦 Component:', component.componentType)
      console.log('📋 Properties:', JSON.parse(JSON.stringify(displayProps, null, 2)))
      console.log(`👀 Transformed: ${transformedElement}`)

      if (valuesNotTransformed.length > 0) {
        console.log(`❌ Values not transformed: ${valuesNotTransformed.join(', ')}`)
      }

      // Interactive replacement mode
      if (shouldReplace) {
        console.log('\n🤔 What would you like to do?')
        console.log('  r) Replace this component')
        console.log('  s) Skip this component')
        console.log('  q) Quit the script')

        const answer = await askUser('Your choice (r/s/q): ')

        if (answer === 'q' || answer === 'quit') {
          console.log('\n🛑 Script stopped by user.')
          if (fileModified) {
            console.log(`💾 Saving changes to ${filePath}...`)
            fileChanges[filePath] = content
          }
          break
        } else if (answer === 's' || answer === 'skip') {
          console.log('⏭️  Skipped this component.')
          totalSkipped++
          continue
        } else if (answer === 'r' || answer === 'replace') {
          // Apply the transformation (replace the component in the file)
          const startIndex = component.matchIndex
          const originalMatch = component.originalMatch

          // Check if it's a self-closing component
          const isSelfClosing = originalMatch.endsWith('/>')

          if (isSelfClosing) {
            // Handle self-closing Box components
            const selfClosingElement =
              element === 'div'
                ? `<${element}${classAttribute}${otherProps}></${element}>`
                : `<${element}${classAttribute}${otherProps} />`

            content =
              content.substring(0, startIndex) +
              selfClosingElement +
              content.substring(startIndex + originalMatch.length)
            fileModified = true
          } else {
            // Handle regular components with children
            // Find the matching closing tag
            let depth = 0
            let searchIndex = startIndex + originalMatch.length
            let endIndex = -1
            const componentType = component.componentType

            while (searchIndex < content.length) {
              const remainingContent = content.substring(searchIndex)
              const openComponentMatch = remainingContent.match(
                new RegExp(`^<${componentType}(\\s|>)`)
              )
              const closeComponentMatch = remainingContent.match(
                new RegExp(`^<\\/${componentType}>`)
              )

              if (openComponentMatch) {
                depth++
                searchIndex += openComponentMatch[0].length
              } else if (closeComponentMatch) {
                if (depth === 0) {
                  endIndex = searchIndex
                  break
                }
                depth--
                searchIndex += closeComponentMatch[0].length
              } else {
                searchIndex++
              }
            }

            if (endIndex !== -1) {
              // Extract the content between opening and closing tags
              const componentContent = content.substring(
                startIndex + originalMatch.length,
                endIndex
              )
              const replacement = `${transformedElement}${componentContent}</${element}>`
              const closingTagLength = componentType.length + 3 // +3 for "</" and ">"

              content =
                content.substring(0, startIndex) +
                replacement +
                content.substring(endIndex + closingTagLength)
              fileModified = true
            } else {
              console.log(`❌ Could not find matching closing tag for ${componentType} component`)
              totalSkipped++
              continue
            }
          }

          console.log('✅ Component replaced!')
          totalReplaced++
        } else {
          console.log('❓ Invalid choice. Skipping this component.')
          totalSkipped++
        }
      }
    }

    // If we're in replace mode and file was modified, save it
    if (shouldReplace && fileModified) {
      fileChanges[filePath] = content
    }
  }

  // Write all changes to disk if in replace mode
  if (shouldReplace && Object.keys(fileChanges).length > 0) {
    console.log('\n💾 Saving changes to files...')
    Object.entries(fileChanges).forEach(([filePath, content]) => {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ Updated: ${filePath}`)
    })
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
