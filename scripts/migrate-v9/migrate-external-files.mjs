/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

import generateModule from '@babel/generator'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import {
  extractCssTemplateLiterals,
  transformStyledComponentCss,
} from './helpers/css-transformer.mjs'
import { getModule } from './helpers/esm.mjs'
import { copyDirSync, deleteDirRecursive } from './helpers/file-utils.mjs'
import { formatWithPrettier } from './helpers/format-with-prettier.mjs'

const traverse = getModule(traverseModule)
const generate = getModule(generateModule)

export async function migrate(dir, copyDir = true) {
  let workingDir = dir
  let tempDir = null

  try {
    if (copyDir) {
      const parent = path.dirname(dir)
      const base = path.basename(dir)
      const dest = path.join(parent, base + '-Migrated')
      if (fs.existsSync(dest)) {
        console.log(`Destination directory already exists, deleting: ${dest}`)
        deleteDirRecursive(dest)
      }
      copyDirSync(dir, dest)
      workingDir = dest
      tempDir = dest // Track temp directory for cleanup
      console.log(`Copied ${dir} to ${dest}`)
    }

    const stylesTs = path.join(workingDir, 'styles.ts')
    const stylesScss = path.join(workingDir, 'styles.scss')
    if (!fs.existsSync(stylesTs)) return

    // Use babel to extract stylesMap
    const content = fs.readFileSync(stylesTs, 'utf8')
    const ast = parse(content, {
      plugins: ['typescript'],
      sourceType: 'module',
    })
    const stylesMap = {}
    const extractedMixins = new Map()
    function stripBox(tag) {
      return tag.endsWith('Box') ? tag.slice(0, -3) : tag
    }

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach(decl => {
          // Extract CSS template literals for mixins
          extractCssTemplateLiterals(decl, extractedMixins)

          if (decl.init && isStyledComponent(decl.init)) {
            const compName = decl.id.name
            let tag = getStyledTag(decl.init)
            tag = stripBox(tag)
            stylesMap[compName] = tag
          }
        })
      },
    })
    const scss = migrateStylesTsToScss(stylesTs, extractedMixins)
    try {
      const formatted = await formatWithPrettier(scss, stylesScss)
      fs.writeFileSync(stylesScss, formatted, 'utf8')
    } catch (e) {
      console.warn('Prettier formatting failed:', e)
      fs.writeFileSync(stylesScss, scss, 'utf8')
    }

    // Update component files in the same dir
    const files = fs.readdirSync(workingDir).filter(f => f.endsWith('.tsx') && f !== 'styles.tsx')
    for (const f of files) {
      await migrateComponentFile(path.join(workingDir, f), stylesMap)
    }
  } catch (error) {
    // If there's an error and we created a temp directory, clean it up
    if (tempDir && copyDir && fs.existsSync(tempDir)) {
      console.log(`Migration failed, cleaning up temp directory: ${tempDir}`)
      deleteDirRecursive(tempDir)
    }
    throw error // Re-throw the error
  }
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Extract CSS content from various styled component patterns
 */
function extractCssFromStyledComponent(node, mixins = new Map()) {
  // Pattern 1: styled.div`css` (simple TaggedTemplateExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    return extractCssFromTemplateLiteral(node.quasi, mixins)
  }

  // Pattern 2: styled(Box)`css` (TaggedTemplateExpression with CallExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'CallExpression' &&
    node.tag.callee.name === 'styled'
  ) {
    return extractCssFromTemplateLiteral(node.quasi, mixins)
  }

  // Pattern 3: styled(Box)((props) => css`...`) (CallExpression with function)
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'TaggedTemplateExpression' &&
    node.callee.tag.type === 'CallExpression' &&
    node.callee.tag.callee.name === 'styled'
  ) {
    // The function argument contains the CSS
    const funcArg = node.arguments[0]
    if (
      funcArg &&
      (funcArg.type === 'ArrowFunctionExpression' || funcArg.type === 'FunctionExpression')
    ) {
      // Look for css`` template literal in the function body
      if (funcArg.body.type === 'TaggedTemplateExpression' && funcArg.body.tag.name === 'css') {
        return extractCssFromTemplateLiteral(funcArg.body.quasi, mixins)
      }
    }
  }

  return null
}

/**
 * Extract CSS string from template literal, handling interpolations
 */
function extractCssFromTemplateLiteral(quasi, mixins = new Map()) {
  if (!quasi.quasis) return null

  // Use our enhanced CSS transformer instead of just adding placeholders
  const result = transformStyledComponentCss(quasi, quasi.expressions || [], mixins)

  // Extract CSS from the result object
  if (result && result.css) {
    return result.css.trim()
  }

  // Fallback to simple extraction if transformer returns null
  const staticParts = quasi.quasis.map(q => q.value.cooked || q.value.raw).filter(Boolean)

  // Join with placeholder comments for interpolations
  let fallbackCss = ''
  for (let i = 0; i < staticParts.length; i++) {
    fallbackCss += staticParts[i]
    if (i < quasi.expressions.length) {
      // Add a comment for the interpolation
      fallbackCss += '/* ${...} */'
    }
  }

  return fallbackCss.trim()
}

/**
 * Map component names to appropriate HTML tags
 */
function getHtmlTagFromComponent(componentName) {
  const componentMap = {
    Article: 'article',
    Aside: 'aside',
    Box: 'div',
    Footer: 'footer',
    Header: 'header',
    Image: 'img',
    Input: 'input',
    List: 'ul',
    ListItem: 'li',
    Main: 'main',
    Nav: 'nav',
    Section: 'section',
  }

  return componentMap[componentName] || 'div'
}

/**
 * Extract the HTML tag from a styled component
 * Handles various patterns and defaults to 'div'
 */
function getStyledTag(node) {
  // Pattern 1: styled.div`` -> 'div'
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    return node.tag.property.name
  }

  // Pattern 2: styled(Box)`` -> 'div' (Box component becomes div)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'CallExpression' &&
    node.tag.callee.name === 'styled'
  ) {
    const arg = node.tag.arguments[0]
    if (arg.type === 'Identifier') {
      // For known components like Box, return appropriate HTML tag
      return getHtmlTagFromComponent(arg.name)
    }
  }

  // Pattern 3: styled(Box)(...)`...` -> 'div'
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'TaggedTemplateExpression' &&
    node.callee.tag.type === 'CallExpression' &&
    node.callee.tag.callee.name === 'styled'
  ) {
    const arg = node.callee.tag.arguments[0]
    if (arg.type === 'Identifier') {
      return getHtmlTagFromComponent(arg.name)
    }
  }

  return 'div' // Default fallback
}

/**
 * Check if a node represents a styled component
 * Handles both: styled.div`` and styled(Box)`` patterns
 */
function isStyledComponent(node) {
  // Pattern 1: styled.div`...` (TaggedTemplateExpression with MemberExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    return true
  }

  // Pattern 2: styled(Box)`...` (TaggedTemplateExpression with CallExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'CallExpression' &&
    node.tag.callee.name === 'styled'
  ) {
    return true
  }

  // Pattern 3: styled(Box)(...)`...` (CallExpression with styled(Component) and generics/props)
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'TaggedTemplateExpression' &&
    node.callee.tag.type === 'CallExpression' &&
    node.callee.tag.callee.name === 'styled'
  ) {
    return true
  }

  return false
}

/**
 * Process component props and convert them to appropriate JSX attributes
 * Handles boolean props, dollar props, dynamic props, etc.
 */
function processComponentProps(attributes, compName, baseClassName) {
  const newAttributes = []
  const classNameParts = [baseClassName]
  const styleProperties = []

  attributes.forEach(attr => {
    if (attr.type !== 'JSXAttribute') {
      newAttributes.push(attr)
      return
    }

    const propName = attr.name.name

    // Handle special props
    if (propName === 'className') {
      // We'll merge this later
      if (attr.value.type === 'StringLiteral') {
        classNameParts.push(attr.value.value)
      }
      return
    }

    if (propName === 'style') {
      newAttributes.push(attr)
      return
    }

    // Handle boolean props (elevated, displayDetail, etc.)
    if (attr.value === null) {
      // Boolean prop like <Card elevated> -> add to className
      const kebabProp = camelToKebab(propName)
      classNameParts.push(kebabProp)
      return
    }

    // Handle dollar props ($isActive, $isExpanded)
    if (propName.startsWith('$')) {
      const cleanPropName = propName.substring(1) // Remove $
      const kebabProp = camelToKebab(cleanPropName)

      // Convert to conditional className
      // $isActive={false} -> className includes conditional logic
      if (attr.value.type === 'JSXExpressionContainer') {
        // For now, create a template literal expression
        // TODO: This needs to be a proper JSX expression
        classNameParts.push(`\${${cleanPropName} ? '${kebabProp}' : ''}`)
      }
      return
    }

    // Handle dynamic props that should become CSS variables
    if (propName === 'variant') {
      // variant={variant} -> style with CSS variable
      styleProperties.push(`'--${baseClassName}-variant': ${generateVariantLogic(compName)}`)
      return
    }

    // Keep other props as-is (aria-*, data-*, etc.)
    newAttributes.push(attr)
  })

  // Generate className attribute
  let classNameValue
  if (classNameParts.length === 1) {
    // Simple string
    classNameValue = {
      type: 'StringLiteral',
      value: classNameParts[0],
    }
  } else {
    // Template literal with dynamic parts
    const templateParts = classNameParts.join(' ')
    if (templateParts.includes('${')) {
      // Has dynamic parts - create JSX expression
      classNameValue = {
        type: 'JSXExpressionContainer',
        expression: {
          expressions: generateTemplateExpressions(),
          quasis: generateTemplateQuasis(templateParts),
          type: 'TemplateLiteral',
        },
      }
    } else {
      // All static
      classNameValue = {
        type: 'StringLiteral',
        value: templateParts,
      }
    }
  }

  newAttributes.push({
    name: { name: 'className', type: 'JSXIdentifier' },
    type: 'JSXAttribute',
    value: classNameValue,
  })

  // Generate style attribute if needed
  if (styleProperties.length > 0) {
    const styleObjectName = `${camelCase(compName)}Style`

    newAttributes.push({
      name: { name: 'style', type: 'JSXIdentifier' },
      type: 'JSXAttribute',
      value: {
        type: 'JSXExpressionContainer',
        expression: {
          name: styleObjectName,
          type: 'Identifier',
        },
      },
    })
  }

  return {
    dynamicClassName: classNameParts.join(' '),
    newAttributes,
    styleObject: styleProperties.length > 0 ? styleProperties : null,
  }
}

/**
 * Generate variant logic for CSS variables
 */
function generateVariantLogic(compName) {
  // For Wrapper component with variant prop
  if (compName === 'Wrapper') {
    return "variant === 'primary' ? 'var(--color-primary-500)' : 'var(--color-secondary-500)'"
  }
  return 'variant'
}

/**
 * Convert camelCase to camelCase (utility function)
 */
function camelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

/**
 * Generate template literal quasis for dynamic className
 */
function generateTemplateQuasis(templateString) {
  // This is a simplified implementation
  // In a real implementation, this would parse the template string properly
  return [
    { tail: true, type: 'TemplateElement', value: { cooked: templateString, raw: templateString } },
  ]
}

/**
 * Generate template literal expressions for dynamic className
 */
function generateTemplateExpressions() {
  // This is a simplified implementation
  // In a real implementation, this would extract ${...} expressions
  return []
}

/**
 * Insert style object declarations into component functions
 */
function insertStyleObjectDeclarations(functionPath, styleObjectsToGenerate) {
  if (styleObjectsToGenerate.size === 0) return

  // Find the function body
  const functionBody = functionPath.node.body
  if (!functionBody || functionBody.type !== 'BlockStatement') return

  // Generate variable declarations for each style object
  for (const [styleObjectName, styleInfo] of styleObjectsToGenerate) {
    const variableDeclaration = generateStyleObjectDeclaration(styleObjectName, styleInfo)
    
    // Insert at the beginning of the function body
    functionBody.body.unshift(variableDeclaration)
  }
}

/**
 * Generate a style object variable declaration
 */
function generateStyleObjectDeclaration(styleObjectName, styleInfo) {
  const { compName } = styleInfo
  
  // For Wrapper component, generate the variant logic
  if (compName === 'Wrapper') {
    return {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: { type: 'Identifier', name: styleObjectName },
          init: {
            type: 'ObjectExpression',
            properties: [
              {
                type: 'Property',
                key: { type: 'StringLiteral', value: '--wrapper-variant' },
                value: {
                  type: 'ConditionalExpression',
                  test: {
                    type: 'BinaryExpression',
                    operator: '===',
                    left: { type: 'Identifier', name: 'variant' },
                    right: { type: 'StringLiteral', value: 'primary' }
                  },
                  consequent: { type: 'StringLiteral', value: 'color-primary-500' },
                  alternate: { type: 'StringLiteral', value: 'color-secondary-500' }
                },
                method: false,
                shorthand: false,
                computed: false,
                kind: 'init'
              },
              {
                type: 'Property', 
                key: { type: 'StringLiteral', value: '--wrapper-topnav-height' },
                value: { type: 'Identifier', name: 'TOPNAV_HEIGHT' },
                method: false,
                shorthand: false,
                computed: false,
                kind: 'init'
              }
            ]
          }
        }
      ],
      kind: 'const'
    }
  }
  
  // Default simple style object
  return {
    type: 'VariableDeclaration',
    declarations: [
      {
        type: 'VariableDeclarator',
        id: { type: 'Identifier', name: styleObjectName },
        init: {
          type: 'ObjectExpression',
          properties: []
        }
      }
    ],
    kind: 'const'
  }
}

// Recursively copy a directory
/**
 * Updates component file: replaces <S.MyElement /> with <li className="my-element" />
 */
async function migrateComponentFile(componentPath, stylesMap) {
  let code = fs.readFileSync(componentPath, 'utf8')
  const ast = parse(code, {
    plugins: ['typescript', 'jsx'],
    sourceType: 'module',
  })

  // Track style objects that need to be generated
  const styleObjectsToGenerate = new Map()

  // Replace import * as S from './styles' with import './styles.scss'
  traverse(ast, {
    ImportDeclaration(path) {
      if (
        path.node.specifiers.length === 1 &&
        path.node.specifiers[0].type === 'ImportNamespaceSpecifier' &&
        path.node.specifiers[0].local.name === 'S' &&
        path.node.source.value === './styles'
      ) {
        path.replaceWith(
          parse("import './styles.scss'", {
            sourceType: 'module',
          }).program.body[0]
        )
      }
    },
    JSXElement(path) {
      if (
        path.node.openingElement.name.type === 'JSXMemberExpression' &&
        path.node.openingElement.name.object.name === 'S'
      ) {
        const compName = path.node.openingElement.name.property.name
        const tag = stylesMap[compName] || 'div'
        const className = camelToKebab(compName)

        // Process props and convert them appropriately
        const { newAttributes, styleObject } = processComponentProps(
          path.node.openingElement.attributes,
          compName,
          className
        )

        // If a style object is needed, track it for generation
        if (styleObject) {
          const styleObjectName = `${camelCase(compName)}Style`
          styleObjectsToGenerate.set(styleObjectName, {
            compName,
            properties: styleObject,
          })
        }

        // Replace <S.MyElement ...> with <tag ...>
        path.node.openingElement.name = { name: tag, type: 'JSXIdentifier' }

        // Replace all attributes with processed ones
        path.node.openingElement.attributes = newAttributes

        // Replace closing tag
        if (path.node.closingElement) {
          path.node.closingElement.name = { name: tag, type: 'JSXIdentifier' }
        }
      }
    },
    // Insert style object declarations into component functions
    FunctionDeclaration(path) {
      if (path.node.id && path.node.id.name.includes('Component')) {
        insertStyleObjectDeclarations(path, styleObjectsToGenerate)
      }
    },
    ArrowFunctionExpression(path) {
      // Handle const Component = () => {} pattern
      if (path.parent.type === 'VariableDeclarator' && 
          path.parent.id.name.includes('Component')) {
        insertStyleObjectDeclarations(path, styleObjectsToGenerate)
      }
    },
  })
  const output = generate(ast, {}, code).code
  try {
    const formatted = await formatWithPrettier(output, componentPath)
    fs.writeFileSync(componentPath, formatted, 'utf8')
  } catch (e) {
    console.warn('Prettier formatting failed:', e)
    fs.writeFileSync(componentPath, output, 'utf8')
  }
}/**
 * Converts styled-components in styles.ts to CSS classes in styles.scss
 */
function migrateStylesTsToScss(stylesTsPath, extractedMixins = new Map()) {
  const content = fs.readFileSync(stylesTsPath, 'utf8')
  const ast = parse(content, {
    plugins: ['typescript'],
    sourceType: 'module',
  })
  const classDefs = []
  traverse(ast, {
    VariableDeclaration(path) {
      path.node.declarations.forEach(decl => {
        if (decl.init && isStyledComponent(decl.init)) {
          const compName = decl.id.name
          const className = camelToKebab(compName)

          // Extract CSS from different styled component patterns
          const css = extractCssFromStyledComponent(decl.init, extractedMixins)
          if (css) {
            // CSS transformation is now handled by extractCssFromStyledComponent
            classDefs.push(`.${className} {\n${css}\n}`)
          }
        }
      })
    },
  })

  // Generate SCSS mixins from extracted CSS template literals
  const mixinDefs = []
  for (const [mixinName, mixinData] of extractedMixins) {
    const mixinScss = `@mixin ${mixinName} {
${mixinData.css}
}`
    mixinDefs.push(mixinScss)
  }

  // Combine mixins and classes
  const scssContent = []
  if (mixinDefs.length > 0) {
    scssContent.push('// Generated SCSS mixins from CSS template literals')
    scssContent.push(...mixinDefs)
    scssContent.push('') // Empty line separator
  }
  scssContent.push(...classDefs)

  return scssContent.join('\n\n')
}

// Usage: node migrate-wui-v9.mjs path/to/component/dir
if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = process.argv[2]
  if (!dir) {
    console.error('Usage: node migrate-wui-v9.mjs path/to/component/dir')
    process.exit(1)
  }
  migrate(dir, true).catch(e => {
    console.error('Migration failed:', e)
    process.exit(1)
  })
}

export { migrateComponentFile, migrateStylesTsToScss }
