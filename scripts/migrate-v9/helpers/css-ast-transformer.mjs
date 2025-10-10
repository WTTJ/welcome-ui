/**
 * Phase 4: Integration function to extract CSS template literals from AST nodes
 *
 * This function bridges our AST transformer with the existing migration pipeline
 * It processes individual VariableDeclarator nodes during AST traversal
 */
export function extractCssTemplateLiteralsAst(astNode, mixins = new Map()) {
  if (
    astNode.type === 'VariableDeclarator' &&
    astNode.init &&
    astNode.init.type === 'TaggedTemplateExpression' &&
    astNode.init.tag.name === 'css'
  ) {
    const variableName = astNode.id.name
    const mixinName = camelToKebab(variableName)

    // Use our AST transformer to process the CSS template literal
    const result = transformCssAst2(
      astNode.init.quasi,
      astNode.init.quasi.expressions || [],
      mixins
    )

    if (result && result.css) {
      mixins.set(mixinName, {
        css: `
  ${result.css.trim()}
`,
        originalName: variableName,
      })

      console.log(`🎯 AST: Extracted mixin '${mixinName}' from variable '${variableName}'`)
    }
  }

  return mixins
}

/**
 * Phase 4: Task 4.2 - Bridge function for backwards compatibility
 *
 * This provides the same interface as the old processIdentifier function
 * but uses our new AST-based transformations
 */
export function processIdentifier(node, options = {}) {
  const name = node.name || node
  const { isStandalone } = options

  // When standalone: identifier is being referenced in CSS context
  // According to migration.md: "Add @include where the declaration is called"
  if (isStandalone) {
    // Convert any camelCase identifier to @include mixin-name
    const mixinName = camelToKebab(name)
    return `@include ${mixinName}`
  }

  // When not standalone: determine if it's a component reference or dynamic value
  // PascalCase indicates component reference (including single uppercase letters)
  if (/^[A-Z]/.test(name) && !/^[A-Z_]+$/.test(name)) {
    return `/* WUI V9 TO MIGRATE - COMPONENT REF: ${name} */`
  }

  // ALL_CAPS constants with underscores are dynamic values
  if (/^[A-Z_]+$/.test(name) && name.includes('_')) {
    return `/* WUI V9 TO MIGRATE - DYNAMIC VALUE: ${name} */`
  }

  // Single letters or abbreviations in ALL_CAPS without underscores are component refs
  if (/^[A-Z]+$/.test(name)) {
    return `/* WUI V9 TO MIGRATE - COMPONENT REF: ${name} */`
  }

  // Everything else is a dynamic value
  return `/* WUI V9 TO MIGRATE - DYNAMIC VALUE: ${name} */`
}

/**
 * AST-based CSS transformer - Rule-driven approach
 *
 * This transformer works purely on AST node patterns, not content patterns.
 * Each transformation rule is based on the structure of AST nodes.
 */

// import { formatScssContent } from './css-transformer.mjs'

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
  let expressionIndex = 0
  let skipNextSemicolon = false // Flag to track when to skip semicolon after migration comments

  // Template literals alternate: quasi[0] + expression[0] + quasi[1] + expression[1] + ... + quasi[n]
  // There's always one more quasi than expressions
  for (let quasiIndex = 0; quasiIndex < quasis.length; quasiIndex++) {
    const quasi = quasis[quasiIndex]
    let staticText = quasi?.value?.cooked || quasi?.value?.raw || ''

    // Handle semicolon skipping for text theme token migration comments
    if (skipNextSemicolon && staticText.startsWith(';')) {
      staticText = staticText.substring(1) // Remove the leading semicolon
      skipNextSemicolon = false
    }

    // Step 1: Add the static CSS text from this quasi
    css += staticText

    // Step 2: Process the expression if it exists
    if (expressionIndex < expressions.length) {
      const expression = expressions[expressionIndex]

      // Check if this expression needs special CSS block handling
      const nextQuasi = quasis[quasiIndex + 1]
      const nextText = nextQuasi?.value?.cooked || nextQuasi?.value?.raw || ''

      // Detect patterns like: ${OrganizationName} { ... }
      if (shouldCommentOutCssBlock(expression, staticText, nextText)) {
        const cssBlock = extractCssBlock(expression, staticText, nextText)
        const commentedBlock = createMigrationComment(cssBlock)
        css += commentedBlock

        // Important: Don't skip the next quasi completely!
        // Instead, let it be processed normally but mark that we've already
        // handled the CSS block portion
        expressionIndex++
        continue
      }

      // Regular expression transformation
      const transformedExpression = transformExpression(expression, mixins)

      // Check if this is a text theme token that generates a migration comment
      if (transformedExpression.includes('Consider changing Text component variant')) {
        skipNextSemicolon = true
      }

      css += transformedExpression
      expressionIndex++
    }
  }

  // Step 3: Apply final CSS cleanup
  css = cleanupCss(css)

  return { css, mixins }
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
export function transformCssAst2(templateLiteralNode, mixins = new Map()) {
  if (!templateLiteralNode || templateLiteralNode.type !== 'TemplateLiteral') {
    return { css: '', mixins }
  }

  let css = ''
  const { expressions, quasis } = templateLiteralNode
  const items = [...quasis, ...expressions].sort((a, b) => a.start - b.start) || []
  let prev

  css = items
    .map(item => {
      // If `${OrganizationLogo}{ ... }` add comment before and start commenting css block
      if (item.type === 'Identifier') {
        prev = item
        return `
  /* WUI V9 TO MIGRATE */
  /* 
  \$\{${item.name}\} `
      }

      // If css block…
      if (item.type === 'TemplateElement') {
        const value = (item.value.cooked || item.value.raw).trim()

        if (prev?.type === 'Identifier') {
          prev = item
          /* If previous was Identifier, we are in a css block after a component reference
            It can be the css block for the identifier but can also add a new css block e.g.
            { outline-color: var(--color-beige-30) !important; } <-- css block
            background-color: var(--color-beige-30); <-- new css block
          */
          // Get content inside the first { ... }
          const matches = value.match(/{([^}]*)}/)
          const match = matches ? matches[0] : null

          if (match)
            if (value !== match) {
              // If there's more content after the css block, keep it outside the comment
              const rest = value.replace(match, '')
              return `${match}
*/
  ${rest}`
            } else {
              // Only the css block, close the comment
              return `${match}
*/`
            }
          else {
            return value
          }
        }

        // Regular quasi so output as-is
        prev = item
        return value
      }
    })
    .join('')

  // Apply final CSS cleanup
  css = cleanupCss(css)

  return { css, mixins }
}

/**
 * AST-based CSS transformer - Rule-driven approach
 *
 * This tran/**
 * Convert camelCase to kebab-case
 */
function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function cleanupCss(css) {
  // Step 1: Transform theme tokens in CSS values
  css = transformCssThemeTokens(css)

  // Step 2: Standard cleanup using actual newlines
  return css
    .replace(/\n\s*\n\s*\n+/g, '\n\n') // Remove excessive empty lines
    .replace(/^\s+|\s+$/g, '') // Trim whitespace
    .replace(/;\s*;/g, ';') // Remove duplicate semicolons
    .replace(/{\s*\n\s*\n/g, '{\n') // Remove extra blank lines after opening braces
    .replace(/\n\s*\n\s*}/g, '\n}') // Remove extra blank lines before closing braces
}

/**
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

  return `var(--${themePath})`
}

/**
 * Create a migration comment for CSS that cannot be automatically transformed
 * @param {string} content - The CSS content to comment out
 * @returns {string}
 */
function createMigrationComment(content) {
  // For CSS blocks, format according to migration.md:
  // /* WUI V9 TO MIGRATE */
  // /*
  // ${content}
  // */
  if (content.includes('{') && content.includes('}')) {
    // Multi-line CSS block
    return `/* WUI V9 TO MIGRATE */\n/*\n${content}\n*/`
  } else {
    // Single line or simple expression
    return `/* WUI V9 TO MIGRATE */\n/* ${content} */`
  }
}

/**
 * Extract a value from an AST node without generating migration comments
 */
function extractAstNodeValue(node) {
  switch (node.type) {
    case 'CallExpression':
      if (node.callee?.name === 'th') {
        return transformThemeFunction(node)
      }
      return `/* ${node.callee?.name || 'unknown'}() call */`
    case 'Identifier':
      return node.name

    case 'Literal':
    case 'NumericLiteral':
      return String(node.value !== undefined ? node.value : '')

    case 'MemberExpression': {
      const object = extractAstNodeValue(node.object)
      const property = node.computed
        ? `[${extractAstNodeValue(node.property)}]`
        : `.${node.property.name}`
      return `${object}${property}`
    }

    case 'StringLiteral':
      return `'${node.value}'`

    default:
      return `/* ${node.type} needs manual review */`
  }
}

/**
 * Extract test condition from conditional expression
 */
function extractConditionalTest(testNode) {
  if (!testNode) return { type: 'unknown' }

  switch (testNode.type) {
    case 'BinaryExpression':
      return {
        left: testNode.left?.name || 'unknown',
        operator: testNode.operator,
        right: testNode.right?.value || testNode.right?.name || 'unknown',
        type: 'comparison',
      }
    case 'Identifier':
      return {
        name: testNode.name,
        type: 'identifier',
      }
    default:
      return { type: 'complex' }
  }
} /**
 * Extract value from conditional consequent/alternate
 */
function extractConditionalValue(valueNode) {
  if (!valueNode) return 'unknown'

  switch (valueNode.type) {
    case 'Identifier':
      return valueNode.name
    case 'Literal':
    case 'StringLiteral':
      return valueNode.value
    default:
      return 'complex'
  }
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
 * Format conditional expression for migration comment
 */
function formatConditionalForComment(node) {
  const test = node.test?.name || 'condition'
  return `${test} ? consequent : alternate`
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

  // Rule 2: Conditional arrow functions (props => condition ? value : alternate)
  if (
    node.params.length === 1 &&
    node.params[0].type === 'Identifier' &&
    node.body.type === 'ConditionalExpression'
  ) {
    return transformConditionalArrowFunction(node)
  }

  // Rule 3: Other arrow function patterns
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
 * Transform conditional arrow functions to CSS variables
 */
function transformConditionalArrowFunction(node) {
  const conditional = node.body
  const propName = conditional.test.property.name

  // Extract values using pure AST operations
  const consequent = extractAstNodeValue(conditional.consequent)
  const alternate = extractAstNodeValue(conditional.alternate)
  const testExpression = extractAstNodeValue(conditional.test)

  // Create CSS variable approach
  const variableName = `--${camelToKebab(propName)}`
  const result = `var(${variableName}) /* ${testExpression} ? ${consequent} : ${alternate} */`

  return result
}

/**
 * Rule: Transform conditional expressions based on pattern
 *
 * AST Node: ConditionalExpression { test, consequent, alternate }
 * Examples: variant === 'primary' ? 'primary-500' : 'secondary-500'
 *
 * Strategy: Convert to CSS variable placeholder that will be handled in component
 */
function transformConditionalExpression(node) {
  // Extract the key parts of the conditional
  const test = extractConditionalTest(node.test)
  const consequent = extractConditionalValue(node.consequent)
  const alternate = extractConditionalValue(node.alternate)

  // Handle common patterns
  if (test.type === 'comparison' && test.left && test.right) {
    // Pattern: variant === 'primary' ? value1 : value2
    if (test.operator === '===' || test.operator === '==') {
      const propName = test.left

      // Generate CSS variable name based on the prop
      const cssVarName = `--component-${camelToKebab(propName)}`

      // Create a conditional CSS variable reference
      // This will be handled by the component's style object
      // Include values in comment for reference
      return `var(${cssVarName}) /* ${consequent} : ${alternate} */`
    }
  }

  // Fallback: Create migration comment for complex conditionals
  return createMigrationComment(`\${${formatConditionalForComment(node)}}`)
}

/**
 * Clean up the generated CSS
 */
/**
 * Transform theme tokens in CSS values to CSS variables
 * Examples:
 *   'padding: lg;' → 'padding: var(--spacing-lg);'
 *   'color: primary-500;' → 'color: var(--color-primary-500);'
 */
function transformCssThemeTokens(css) {
  // Transform spacing tokens (xs, sm, md, lg, xl, xxl, 3xl)
  const spacingTokens = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl']
  spacingTokens.forEach(token => {
    // Match token as CSS value (preceded by : or space, followed by ; or space)
    const regex = new RegExp(`(:\\s*|\\s+)${token}(\\s*[;}]|\\s+)`, 'g')
    css = css.replace(regex, `$1var(--spacing-${token})$2`)
  })

  // Transform color tokens (pattern: word-number like primary-500, secondary-100)
  const colorTokenRegex = /(:\s*|\s+)([a-z]+-\d+)(\s*[;}]|\s+)/g
  css = css.replace(colorTokenRegex, '$1var(--color-$2)$3')

  return css
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
      return transformConditionalExpression(node)

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

  // Rule 0: Theme tokens - check first before other identifier rules
  // Spacing tokens: xs, sm, md, lg, xl, xxl, 3xl
  const spacingTokens = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl']
  if (spacingTokens.includes(name)) {
    return `var(--spacing-${name})`
  }

  // Color tokens: primary-500, secondary-200, etc.
  if (/^[a-z]+-\d+$/.test(name) || /^[a-z]+-[a-z]+$/.test(name)) {
    return `var(--color-${name})`
  }

  // Rule 1: ALL_CAPS_UNDERSCORE = constants to migrate
  if (/^[A-Z][A-Z_]*$/.test(name)) {
    return createMigrationComment(`\${${name}}`)
  }

  // Rule 2: camelCase ending in 'Styles' = mixin reference
  if (/[a-z]Styles$/.test(name)) {
    const mixinName = camelToKebab(name)
    // if (mixins) {
    //   mixins.set(mixinName, `// Mixin ${mixinName} from ${name}`)
    // }
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

  // Rule 1: Handle props.* patterns - convert to CSS variables
  if (parts.length >= 2 && parts[0] === 'props') {
    const propName = parts.slice(1).join('-')
    const cssVarName = `--component-${camelToKebab(propName)}`
    return `var(${cssVarName}) /* ${fullPath} */`
  }

  // Rule 2: Other member expressions get migration comments
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
      // Clean up the body result and ensure proper indentation
      const cleanBodyResult = bodyResult.trim()
      // Add proper indentation to each line
      const indentedBodyResult = cleanBodyResult
        .split('\n')
        .map(line => (line.trim() ? `    ${line}` : line))
        .join('\n')
      return `\n  &.${className} {\n${indentedBodyResult}\n  }`
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

  // Special handling for text theme tokens - suggest Text component variant change
  if (themePath.startsWith('texts.')) {
    const textVariant = themePath.replace('texts.', '')
    return createMigrationComment(
      `Consider changing Text component variant to '${textVariant}' instead of th('${themePath}')`
    )
  }

  // Regular theme tokens get converted to CSS variables
  return convertThemePathToCssVar(themePath)
}
