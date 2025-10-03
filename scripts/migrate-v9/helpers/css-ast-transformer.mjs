/**
 * AST-based CSS transformer - Rule-driven approach
 *
 * This transformer works purely on AST node patterns, not content patterns.
 * Each transformation rule is based on the structure of AST nodes.
 */

// import { formatScssContent } from './css-transformer.mjs'

/**
 * Helper function to determine if a CSS block should be commented out
 * @param {Object} expression - The AST expression node
 * @param {string} beforeText - Text before the expression
 * @param {string} afterText - Text after the expression
 * @returns {boolean}
 */
function shouldCommentOutCssBlock(expression, beforeText, afterText) {
  // Check if this is an Identifier that should be commented out
  if (expression.type === 'Identifier') {
    const name = expression.name

    // Check if the after text contains a CSS block (starts with whitespace + {)
    const hasNextCssBlock = /^\s*\{/.test(afterText)

    // Comment out blocks for CONSTANTS and COMPONENTS that have CSS following them
    if (hasNextCssBlock) {
      return /^[A-Z][A-Z_]*$/.test(name) || /^[A-Z][a-z]/.test(name)
    }
  }

  return false
}

/**
 * Extract the full CSS block that should be commented out
 * @param {Object} expression - The AST expression node
 * @param {string} beforeText - Text before the expression
 * @param {string} afterText - Text after the expression
 * @returns {string}
 */
function extractCssBlock(expression, beforeText, afterText) {
  const expressionName = expression.name || ''

  // Find the matching closing brace
  let braceCount = 0
  let blockEnd = 0

  for (let i = 0; i < afterText.length; i++) {
    if (afterText[i] === '{') {
      braceCount++
    } else if (afterText[i] === '}') {
      braceCount--
      if (braceCount === 0) {
        blockEnd = i + 1
        break
      }
    }
  }

  const cssBlock = afterText.substring(0, blockEnd)
  return `\${${expressionName}}${cssBlock}`
}

/**
 * Create a migration comment for CSS that cannot be automatically transformed
 * @param {string} content - The CSS content to comment out
 * @returns {string}
 */
function createMigrationComment(content) {
  return `/* WUI V9 TO MIGRATE */\n/* ${content} */`
}

/**
 * Transform a CSS template literal using AST-based rules
 *
 * AST Node Type: TemplateLiteral
 * Structure: { type: 'TemplateLiteral', quasis: [...], expressions: [...] }
 *
 * @param {Object} templateLiteralNode - The TemplateLiteral AST node from css`...`
 * @param {Array} expressions - Array of expression AST nodes from ${...} interpolations
 * @param {Map} mixins - Map to collect generated mixins
 * @returns {Object} { css: string, mixins: Map }
 */
export function transformCssAst(templateLiteralNode, expressions = [], mixins = new Map()) {
  if (!templateLiteralNode || templateLiteralNode.type !== 'TemplateLiteral') {
    return { css: '', mixins }
  }

  let css = ''
  const { quasis } = templateLiteralNode

  // Core algorithm: Interleave static text (quasis) with transformed expressions
  for (let i = 0; i < quasis.length; i++) {
    const quasi = quasis[i]
    const expression = expressions[i]
    const staticText = quasi?.value?.cooked || quasi?.value?.raw || ''

    // Step 1: Add the static CSS text from this quasi
    css += staticText

    // Step 2: Process the expression if it exists
    if (expression) {
      // Check if this expression needs special CSS block handling
      const nextQuasi = quasis[i + 1]
      const nextText = nextQuasi?.value?.cooked || nextQuasi?.value?.raw || ''

      // Detect patterns like: ${OrganizationName} { ... }
      if (shouldCommentOutCssBlock(expression, staticText, nextText)) {
        const cssBlock = extractCssBlock(expression, staticText, nextText)
        const commentedBlock = createMigrationComment(cssBlock)
        css += commentedBlock

        // Skip the next quasi since we've already processed it
        i++
        continue
      }

      // Regular expression transformation
      const transformedExpression = transformExpression(expression, mixins)
      css += transformedExpression
    }
  }

  // Step 3: Apply final CSS cleanup
  css = cleanupCss(css)

  return { css, mixins }
} /**
 * Convert camelCase to kebab-case
 */
function camelToKebab(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
}

/**
 * Clean up the generated CSS
 */
function cleanupCss(css) {
  return css
    .replace(/\\n\\s*\\n\\s*\\n+/g, '\\n\\n') // Remove excessive empty lines
    .replace(/^\\s+|\\s+$/g, '') // Trim whitespace
    .replace(/;\\s*;/g, ';') // Remove duplicate semicolons
} /**
 * Convert theme path to CSS variable
 * Examples: 'space.md' → 'var(--spacing-md)'
 */
function convertThemePathToCssVar(themePath) {
  const parts = themePath.split('.')

  // Special mappings for theme sections
  const sectionMappings = {
    colors: 'color',
    space: 'spacing',
    texts: 'text',
  }

  if (parts.length >= 2) {
    const section = sectionMappings[parts[0]] || parts[0]
    const rest = parts.slice(1).join('-')
    return `var(--${section}-${rest})`
  }

  return `var(--${themePath.replace(/\\./g, '-')})`
}

/**
 * Convert prop name to CSS class name
 */
function propToClassName(propName) {
  // Remove $ prefix if present
  const cleanName = propName.replace(/^\$/, '')

  // Special mappings
  const specialMappings = {
    displayDetail: 'display-detail',
    isActive: 'is-active',
    isExpanded: 'is-expanded',
  }

  return specialMappings[cleanName] || camelToKebab(cleanName)
}

/**
 * Rule: Transform arrow functions based on parameter and body patterns
 *
 * AST Node: ArrowFunctionExpression { params, body }
 * Examples: ({ elevated }) => elevated && css`...`
 */
function transformArrowFunction(node, mixins) {
  // Rule 1: Single object pattern parameter
  if (node.params.length === 1 && node.params[0].type === 'ObjectPattern') {
    return transformObjectPatternFunction(node, mixins)
  }

  // Rule 2: Other arrow function patterns
  return createMigrationComment('Arrow function needs manual review')
}

/**
 * Rule: Transform function calls based on function name
 *
 * AST Node: CallExpression { callee: Identifier, arguments: [...] }
 * Examples: th('space.md'), css`...`
 */
function transformCallExpression(node) {
  const functionName = node.callee?.name

  // Rule 1: th() calls = theme function calls
  if (functionName === 'th') {
    return transformThemeFunction(node)
  }

  // Rule 2: css() calls = nested CSS (should be handled by TaggedTemplateExpression)
  if (functionName === 'css') {
    return '/* Nested css() call - handle as TaggedTemplateExpression */'
  }

  // Rule 3: Unknown function calls
  return createMigrationComment(`${functionName}()`)
}

/**
 * Rule: Transform conditional expressions based on pattern
 *
 * AST Node: ConditionalExpression { test, consequent, alternate }
 * Examples: variant === 'primary' ? 'primary-500' : 'secondary-500'
 */
function transformConditionalExpression(node, mixins) {
  // For now, create a migration comment that includes the conditional
  const nodeString = node.test?.name || 'condition'
  return createMigrationComment(`\${${nodeString} ? consequent : alternate}`)
}

/**
 * Transform an expression AST node based on its type
 * This is where our transformation rules are applied
 */
function transformExpression(node, mixins) {
  if (!node) return ''

  // Rule-based transformation by AST node type
  switch (node.type) {
    case 'ArrowFunctionExpression':
      return transformArrowFunction(node, mixins)

    case 'CallExpression':
      return transformCallExpression(node)

    case 'ConditionalExpression':
      return transformConditionalExpression(node, mixins)

    case 'Identifier':
      return transformIdentifier(node, mixins)

    case 'Literal':
    case 'StringLiteral':
      return node.value || ''

    case 'LogicalExpression':
      return transformLogicalExpression(node, mixins)
    case 'MemberExpression':
      return transformMemberExpression(node)

    case 'TaggedTemplateExpression':
      return transformTaggedTemplate(node, mixins)

    default:
      // Unknown expression - add migration comment
      return createMigrationComment(`Unknown expression type: ${node.type}`)
  }
}

/**
 * Rule: Transform identifiers based on their naming pattern
 *
 * AST Node Type: Identifier
 * Structure: { type: 'Identifier', name: string }
 * Examples: TOPNAV_HEIGHT, triggerActiveStyles, variant, OrganizationName
 */
function transformIdentifier(node, mixins) {
  const { name } = node

  // Rule 1: ALL_CAPS_UNDERSCORE = constants to migrate
  if (/^[A-Z][A-Z_]*$/.test(name)) {
    return createMigrationComment(`\${${name}}`)
  }

  // Rule 2: camelCase ending in 'Styles' = mixin reference
  if (/[a-z]Styles$/.test(name)) {
    const mixinName = camelToKebab(name)
    if (mixins) {
      mixins.set(mixinName, `// Mixin ${mixinName} from ${name}`)
    }
    return `@include ${mixinName};`
  }

  // Rule 3: PascalCase = component reference to migrate
  if (/^[A-Z][a-z]/.test(name)) {
    return createMigrationComment(`\${${name}}`)
  }

  // Rule 4: Everything else = variable to migrate
  return createMigrationComment(`\${${name}}`)
}

// === UTILITY FUNCTIONS ===

/**
 * Rule: Transform logical expressions (&&, ||)
 *
 * AST Node: LogicalExpression { operator, left, right }
 * Examples: elevated && css`...`
 */
function transformLogicalExpression(node, mixins) {
  // Rule 1: && operator with TaggedTemplateExpression right side
  if (node.operator === '&&' && node.right.type === 'TaggedTemplateExpression') {
    const cssContent = transformTaggedTemplate(node.right, mixins)
    return cssContent
  }

  // Rule 2: && operator with identifier right side (mixin reference)
  if (node.operator === '&&' && node.right.type === 'Identifier') {
    const mixinName = camelToKebab(node.right.name)
    return `@include ${mixinName};`
  }

  return createMigrationComment('Logical expression needs manual review')
}

/**
 * Rule: Transform member expressions (object.property)
 *
 * AST Node: MemberExpression { object, property }
 * Examples: props.variant, theme.colors.primary
 */
function transformMemberExpression(node) {
  // Build the full member path
  const parts = []
  let current = node

  while (current && current.type === 'MemberExpression') {
    if (current.property?.name) {
      parts.unshift(current.property.name)
    }
    current = current.object
  }

  if (current && current.type === 'Identifier') {
    parts.unshift(current.name)
  }

  const fullPath = parts.join('.')
  return createMigrationComment(fullPath)
}

/**
 * Rule: Transform arrow functions with object destructuring parameters
 *
 * Examples: ({ elevated }) => elevated && css`...`
 */
function transformObjectPatternFunction(node, mixins) {
  const param = node.params[0]
  const properties = param.properties

  if (properties.length === 1 && properties[0].type === 'ObjectProperty') {
    const propName = properties[0].key.name
    const className = propToClassName(propName)

    // Rule: LogicalExpression body (prop && css`...`)
    if (node.body.type === 'LogicalExpression') {
      const bodyResult = transformLogicalExpression(node.body, mixins)
      return `\\n\\n  &.${className} {\\n    ${bodyResult}\\n  }`
    }
  }

  return createMigrationComment('Object pattern function needs manual review')
}

/**
 * Rule: Transform tagged template expressions (css`...`)
 *
 * AST Node: TaggedTemplateExpression { tag, quasi }
 * Examples: css`display: flex;`
 */
function transformTaggedTemplate(node, mixins) {
  if (node.tag?.name === 'css') {
    // Recursively transform the nested template literal
    const result = transformCssAst(node.quasi, node.quasi.expressions || [], mixins)
    return result.css
  }

  return createMigrationComment('Tagged template needs manual review')
}

/**
 * Rule: Transform theme function calls to CSS variables
 *
 * AST Node: CallExpression { callee: { name: 'th' }, arguments: [StringLiteral] }
 * Examples: th('space.md') → var(--spacing-md)
 */
function transformThemeFunction(node) {
  if (!node.arguments || node.arguments.length === 0) {
    return createMigrationComment('th()')
  }

  const arg = node.arguments[0]
  if (arg.type !== 'Literal' && arg.type !== 'StringLiteral') {
    return createMigrationComment('th() with non-string argument')
  }

  const themePath = arg.value
  return convertThemePathToCssVar(themePath)
}
