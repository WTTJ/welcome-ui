/* eslint-disable no-console */
import fs from 'fs'

/**
 * Enhanced CSS transformer for complex styled-components migration
 * Handles theme functions, interpolations, conditional logic, and more
 */

// Load theme data for transformation
let themeData = {}
try {
  const themePath = new URL('./theme.json', import.meta.url).pathname
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  themeData = JSON.parse(fs.readFileSync(themePath, 'utf8'))
  console.log('✅ Loaded theme.json for transformations')
} catch (e) {
  console.warn('Could not load theme.json:', e.message)
}

/**
 * Extract CSS template literals and convert them to SCSS mixins
 */
export function extractCssTemplateLiterals(astNode, mixins = new Map()) {
  // This function would be called during AST traversal to find
  // variable declarations like: const triggerActiveStyles = css`...`

  if (
    astNode.type === 'VariableDeclarator' &&
    astNode.init &&
    astNode.init.type === 'TaggedTemplateExpression' &&
    astNode.init.tag.name === 'css'
  ) {
    const variableName = astNode.id.name
    const mixinName = variableName
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '')

    // Transform the CSS content
    const cssContent = transformCssTemplateLiteral(
      astNode.init.quasi,
      astNode.init.quasi.expressions || [],
      mixins
    )

    if (cssContent) {
      mixins.set(mixinName, {
        css: cssContent,
        originalName: variableName,
      })
    }
  }

  return mixins
}

/**
 * Extract mixin definitions from CSS constants
 * const activeStyles = css`...` -> @mixin active-styles { ... }
 */
export function extractMixinDefinitions() {
  const mixins = []

  // This would traverse the AST to find CSS constants
  // and convert them to SCSS mixins

  return mixins
}

/**
 * Process conditional logic in styled components
 * ${({ prop }) => prop && css`...`} -> proper CSS handling
 */
export function processConditionalLogic() {
  // This is a complex case that needs special handling
  // For now, we'll mark it for manual review
  return {
    needsManualReview: true,
    originalCode: '/* CONDITIONAL_LOGIC_TO_MIGRATE */',
    type: 'conditional',
  }
}

/**
 * Process identifier references
 * Note: Context (single line vs inline) is handled in transformCssTemplateLiteral
 */
export function processIdentifier(expr, context = {}) {
  const name = expr.name

  // 1. PascalCase for components (starts with uppercase, but not constants like TOPNAV_HEIGHT)
  // Components: MyComponent, UserProfile, CSS, A, B
  // Constants: TOPNAV_HEIGHT, API_KEY, USER_PREFERENCES
  if (/^[A-Z]/.test(name) && !/^[A-Z]+_[A-Z_]*$/.test(name)) {
    return `__COMPONENT_SELECTOR_COMMENT__${name}__`
  }

  // 2. Check if this appears to be a mixin (by context)
  if (context.isStandalone) {
    // ${xxx}; by itself on a single line: convert to @include mixin
    const mixinName = name
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '')
    return `@include ${mixinName}`
  }

  // 3. Everything else is a variable for manual migration
  return `/* WUI V9 TO MIGRATE - DYNAMIC VALUE: ${name} */`
} /**
 * Transform color tokens to CSS variables
 * 'primary-500' -> 'var(--color-primary-500)'
 */
export function transformColorToken(token) {
  // Check if it looks like a color token (has dash and number/name)
  if (/^[a-z]+-\d+$/.test(token) || /^[a-z]+-[a-z]+$/.test(token)) {
    return `var(--color-${token})`
  }
  return token
}

/**
 * Extract and transform CSS from template literal with interpolations
 */
export function transformCssTemplateLiteral(quasi, expressions = [], mixins = new Map()) {
  if (!quasi.quasis) return null

  let css = ''
  const transformedExpressions = []
  const conditionalModifiers = []

  // Process expressions (interpolations) with context
  expressions.forEach((expr, index) => {
    // Determine context: check if this expression appears standalone on a line
    const beforeText = quasi.quasis[index]?.value?.cooked || ''
    const afterText = quasi.quasis[index + 1]?.value?.cooked || ''

    // Check if expression is standalone (appears by itself on a line)
    // Look for patterns like: ";\n  " before and "\n" or ";" after
    const beforeLines = beforeText.split('\n')
    const afterLines = afterText.split('\n')

    const beforeLastLine = beforeLines[beforeLines.length - 1] || ''
    const afterFirstLine = afterLines[0] || ''

    // Standalone if: previous line ends with whitespace, next starts with whitespace/semicolon
    const isStandalone = /^\s*$/.test(beforeLastLine) && /^[\s;]*$/.test(afterFirstLine)

    const context = { isStandalone }
    const transformed = processExpression(expr, mixins, context)

    // Check for conditional prop marker
    if (typeof transformed === 'string' && transformed.startsWith('__CONDITIONAL_PROP__')) {
      // Format: __CONDITIONAL_PROP__className__value__
      const match = transformed.match(/__CONDITIONAL_PROP__(.+?)__(.+)__$/)
      if (match) {
        const className = match[1]
        const value = match[2]
        conditionalModifiers.push({ className, value })
        transformedExpressions[index] = '' // Remove the property entirely - it becomes a conditional modifier
      } else {
        transformedExpressions[index] = transformed
      }
    } else {
      transformedExpressions[index] = transformed
    }
  })

  // Combine static parts with transformed expressions using AST structure
  for (let i = 0; i < quasi.quasis.length; i++) {
    let quasiValue = quasi.quasis[i].value.cooked || quasi.quasis[i].value.raw

    // Transform tokens in each static part individually
    quasiValue = transformTokensInCss(quasiValue)

    css += quasiValue

    if (i < transformedExpressions.length) {
      if (
        typeof transformedExpressions[i] === 'object' &&
        transformedExpressions[i].type === 'textVariant'
      ) {
        // Special handling for text variants - expand to actual CSS properties
        css += expandTextVariant(transformedExpressions[i].variant)
      } else {
        css += transformedExpressions[i]
      }
    }
  }

  // Post-process to properly comment out problematic CSS rules
  css = postProcessComments(css)

  // Add conditional modifiers as nested selectors at the end
  if (conditionalModifiers.length > 0) {
    for (const { className, value } of conditionalModifiers) {
      css += `

  &.${className} {
    margin-top: ${value};
  }`
    }
  }

  // Clean up empty lines and malformed CSS
  css = css
    .replace(/^\s*[^:]+:\s*;\s*$/gm, '') // Remove properties with empty values like "margin-top: ;" (line by line)
    .replace(/;\s*;/g, ';') // Fix double semicolons
    .replace(/;\s*\n/g, ';\n') // Clean up semicolons
    .replace(/^\s*;\s*$/gm, '') // Remove lines with just semicolons
    .replace(/\/\*[^*]*\*\/\s*;/g, match => match.replace(/\s*;$/, '')) // Remove semicolons after comments
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Reduce multiple empty lines
    .replace(/^\s*\n/gm, '') // Remove leading empty lines
    .replace(/\}\s*;/g, '}') // Remove semicolons after closing braces

  return css.trim()
}

/**
 * Transform spacing tokens to CSS variables
 * 'md' -> 'var(--spacing-md)'
 * 'xxl' -> 'var(--spacing-xxl)'
 */
export function transformSpacingToken(token) {
  const spacingTokens = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl']
  if (spacingTokens.includes(token)) {
    return `var(--spacing-${token})`
  }
  return token
}

/**
 * Main CSS transformation pipeline
 */
export function transformStyledComponentCss(node, expressions = [], mixins = new Map()) {
  if (!node) return null

  const css = transformCssTemplateLiteral(node, expressions, mixins)
  if (!css) return null

  return {
    css,
    hasComponentSelectors: css.includes('WUI V9 TO MIGRATE'),
    hasConditionalLogic:
      css.includes('CONDITIONAL_EXPRESSION') || css.includes('LOGICAL_EXPRESSION'),
    hasTextVariant: css.includes('TEXT_VARIANT_'),
    mixins,
    needsManualReview: css.includes('TO_MIGRATE') || css.includes('CONDITIONAL_'),
  }
}

/**
 * Transform theme function calls to CSS variables
 * th('colors.primary-500') -> var(--color-primary-500)
 * th('space.sm') -> var(--spacing-sm)
 * th('texts.h4') -> CSS properties for h4 text variant
 */
export function transformThemeFunction(thCall) {
  // Extract the path from th('path.to.value')
  const match = thCall.match(/th\(['"]([\w.-]+)['"]\)/)
  if (!match) return thCall

  const themePath = match[1]
  const pathParts = themePath.split('.')

  // Special handling for different theme sections
  if (pathParts[0] === 'colors') {
    const colorName = pathParts.slice(1).join('-')
    return `var(--color-${colorName})`
  }

  if (pathParts[0] === 'space' && pathParts[1]) {
    return `var(--spacing-${pathParts[1]})`
  }

  if (pathParts[0] === 'texts' && pathParts[1]) {
    // For text variants, we need to extract individual properties
    // This will be handled specially in the component transformer
    return { type: 'textVariant', variant: pathParts[1] }
  }

  // Default: convert to CSS variable
  const varName = themePath.replace(/\./g, '-')
  return `var(--${varName})`
}

/**
 * Expand text variant to actual CSS properties
 */
function expandTextVariant() {
  // For text variants, we should NOT expand them to CSS properties
  // Instead, they should be handled by the component transformer
  // to add variant props to Text components

  // Return basic reset styles that are commonly needed
  return `
  margin: 0;`
}

/**
 * Post-process CSS to properly comment out problematic rules
 */
function postProcessComments(css) {
  // Handle function expression comments that appear standalone
  css = css.replace(/\s*\/\*\s*FUNCTION_EXPRESSION - NEEDS_MANUAL_REVIEW\s*\*\/\s*/g, () => {
    return `
  /* WUI V9 TO MIGRATE */
  /*
  \${({ prop }) => condition && css\`...\`}
  */`
  })

  // Handle function expression comments in property context
  css = css.replace(
    /([^{}]*?):\s*\/\*\s*FUNCTION_EXPRESSION - NEEDS_MANUAL_REVIEW[^*]*\*\/[^;]*;?/g,
    (match, property) => {
      return `
  /* WUI V9 TO MIGRATE */
  /*
  ${property.trim()}: \${({ prop }) => value};
  */`
    }
  )

  // Handle component selector comments - simplified approach
  css = css.replace(/__COMPONENT_SELECTOR_COMMENT__([^_]+)__/g, (match, componentName) => {
    return `/* \${${componentName}} */`
  })

  // Now find and comment out CSS rules that start with these component selector comments
  css = css.replace(
    /\/\*\s*\$\{([^}]+)\}\s*\*\/\s*\{([^}]*)\}/g,
    (match, componentName, content) => {
      // Clean up the content and format it properly
      const cleanContent = content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && line !== '')
        .map(line => `    ${line}`)
        .join('\n')

      return `
  /* WUI V9 TO MIGRATE */
  /*
  \${${componentName}} {
${cleanContent}
  }
  */`
    }
  )

  // Clean up any remaining orphaned selectors that just have comments
  css = css.replace(/\s*\/\* WUI V9 TO MIGRATE:[^*]*\*\/\s*\{([^}]*)\}/g, (match, content) => {
    const lines = content
      .split('\n')
      .map(line => {
        // Remove any existing comment markers to avoid nesting
        const cleanLine = line.replace(/\/\*|\*\//g, '').trim()
        return cleanLine ? `  /* ${cleanLine} */` : ''
      })
      .filter(Boolean)
      .join('\n')
    return `\n  /* WUI V9 TO MIGRATE: Component selector rule */\n${lines}`
  })

  return css
}

/**
 * Process function calls like th(), css(), etc.
 * Patterns:
 * - ${th('texts.xxx')}; by itself on single line: add variant="xxx" to Text tag
 * - ${th('xxx.yyy')} with dot: replace with styles from theme.json
 */
function processCallExpression(expr) {
  if (expr.callee.name === 'th') {
    const arg = expr.arguments[0]
    if (arg && arg.type === 'StringLiteral') {
      const thPath = arg.value

      // ${th('texts.xxx')}; by itself on single line: for Text component variants
      if (thPath.startsWith('texts.')) {
        const variant = thPath.replace('texts.', '')
        return { type: 'textVariant', variant }
      }

      // ${th('xxx.yyy')} with at least one dot: replace with theme values
      if (thPath.includes('.')) {
        return transformThemeFunction(`th('${thPath}')`)
      }
    }
  }
  return '/* ${...} */'
}

/**
 * Process ternary expressions: ${condition ? value1 : value2}
 */
function processConditionalExpression() {
  // For ternary expressions in CSS, we need to extract the logic
  // ${variant === 'primary' ? 'primary-500' : 'secondary-500'}
  // This becomes a CSS variable that's set dynamically
  return 'var(--wrapper-variant)'
}

/**
 * Process conditional expressions with props: props.displayDetail ? th('space.sm') : 0
 */
function processConditionalExpressionWithProp(expr, paramName) {
  // Handle patterns like: props.displayDetail ? th('space.sm') : 0
  if (expr.test.type === 'MemberExpression' && expr.test.object.name === paramName) {
    const propName = expr.test.property.name
    const className = propName.replace(/([A-Z])/g, '-$1').toLowerCase()

    // Check if the consequent (true value) is th() call and alternate (false value) is 0
    if (
      expr.consequent.type === 'CallExpression' &&
      expr.consequent.callee.name === 'th' &&
      expr.alternate.type === 'NumericLiteral' &&
      expr.alternate.value === 0
    ) {
      const thValue = expr.consequent.arguments[0]?.value
      if (thValue) {
        const transformedValue = transformThemeFunction(`th('${thValue}')`)

        // Return a special marker that will be handled during CSS property processing
        return `__CONDITIONAL_PROP__${className}__${transformedValue}__`
      }
    }
  }

  return '/* CONDITIONAL_EXPRESSION - NEEDS_MANUAL_REVIEW */'
}

/**
 * Process individual expression nodes in template literals
 */
function processExpression(expr, mixins, context = {}) {
  if (!expr) return '/* ${...} */'

  switch (expr.type) {
    case 'ArrowFunctionExpression':
    case 'FunctionExpression':
      return processFunctionExpression(expr, mixins)

    case 'CallExpression':
      return processCallExpression(expr)

    case 'ConditionalExpression':
      return processConditionalExpression(expr)

    case 'Identifier':
      return processIdentifier(expr, context)

    case 'LogicalExpression':
      return processLogicalExpression(expr, mixins)

    default:
      return '/* ${...} */'
  }
}

/**
 * Process function expressions (arrow functions, etc.)
 */
function processFunctionExpression(expr, mixins = new Map()) {
  if (!expr) return '__FUNCTION_EXPRESSION_COMMENT__'

  // Try to parse common patterns like ({ propName }) => propName && css`...`
  if (expr.type === 'ArrowFunctionExpression') {
    // Check if it's a simple destructured prop pattern
    const params = expr.params
    if (params.length === 1 && params[0].type === 'ObjectPattern') {
      const properties = params[0].properties
      if (properties.length === 1 && properties[0].type === 'ObjectProperty') {
        const propName = properties[0].key.name

        // Check if the body is a logical expression: propName && css`...`
        if (
          expr.body.type === 'LogicalExpression' &&
          expr.body.operator === '&&' &&
          expr.body.left.type === 'Identifier' &&
          expr.body.left.name === propName
        ) {
          // Delegate to the logical expression handler
          return processLogicalExpression(expr.body, mixins)
        }

        // Check if the body is a negated logical expression: !propName && css`...`
        if (
          expr.body.type === 'LogicalExpression' &&
          expr.body.operator === '&&' &&
          expr.body.left.type === 'UnaryExpression' &&
          expr.body.left.operator === '!' &&
          expr.body.left.argument.type === 'Identifier' &&
          expr.body.left.argument.name === propName
        ) {
          // Delegate to the logical expression handler
          return processLogicalExpression(expr.body, mixins)
        }
      }
    }

    // Handle patterns like: props => (props.displayDetail ? th('space.sm') : 0)
    if (params.length === 1 && params[0].type === 'Identifier') {
      const paramName = params[0].name

      // Check if body is a conditional expression (ternary)
      if (expr.body.type === 'ConditionalExpression') {
        return processConditionalExpressionWithProp(expr.body, paramName)
      }

      // Check if body is a parenthesized conditional expression
      if (
        expr.body.type === 'ParenthesizedExpression' &&
        expr.body.expression.type === 'ConditionalExpression'
      ) {
        return processConditionalExpressionWithProp(expr.body.expression, paramName)
      }
    }
  }

  // For complex function expressions we can't parse, comment them out with readable info
  return '/* FUNCTION_EXPRESSION - NEEDS_MANUAL_REVIEW */'
}

/**
 * Process logical expressions: ${prop && css`...`} or ${!prop && css`...`} or ${prop && mixinName}
 */
function processLogicalExpression(expr, mixins) {
  // For ${elevated && css`...`} patterns, we return a nested class selector
  if (expr.operator === '&&' && expr.left.type === 'Identifier') {
    const propName = expr.left.name.replace(/^\$/, '') // Remove $ prefix if present
    const className = propName.replace(/([A-Z])/g, '-$1').toLowerCase()

    if (expr.right.type === 'TaggedTemplateExpression' && expr.right.tag.name === 'css') {
      // Extract the CSS from the right side
      const nestedCss = transformCssTemplateLiteral(
        expr.right.quasi,
        expr.right.quasi.expressions || [],
        mixins
      )
      return `
  
  &.${className} {
    ${nestedCss}
  }`
    }

    // Handle ${prop && mixinName} patterns - right side is an identifier (mixin)
    if (expr.right.type === 'Identifier') {
      const mixinName = expr.right.name
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '')

      return `
  
  &.${className} {
    @include ${mixinName};
  }`
    }
  }

  // For ${!$isExpanded && css`...`} patterns
  // When negated, apply styles to base selector (default state) and create override class
  if (
    expr.operator === '&&' &&
    expr.left.type === 'UnaryExpression' &&
    expr.left.operator === '!'
  ) {
    const propName = expr.left.argument.name.replace(/^\$/, '') // Remove $ prefix
    const className = propName.replace(/([A-Z])/g, '-$1').toLowerCase()

    if (expr.right.type === 'TaggedTemplateExpression' && expr.right.tag.name === 'css') {
      const nestedCss = transformCssTemplateLiteral(
        expr.right.quasi,
        expr.right.quasi.expressions || [],
        mixins
      )

      // Generate default styles + override class
      // The CSS properties that need to be overridden with 'inherit'
      const cssLines = nestedCss.split('\n').filter(line => line.trim())
      const inheritOverrides = cssLines
        .filter(line => line.includes(':'))
        .map(line => {
          const property = line.split(':')[0].trim()
          return `    ${property}: inherit;`
        })
        .join('\n')

      return `
${nestedCss}

  &.${className} {
${inheritOverrides}
  }`
    }

    // Handle ${!prop && mixinName} patterns
    if (expr.right.type === 'Identifier') {
      const mixinName = expr.right.name
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '')

      // For negated mixin patterns, we can't easily generate inherit overrides
      // So we'll use a comment approach
      return `
  @include ${mixinName};
  
  /* TODO: Add .${className} class to override ${mixinName} when ${propName} is true */`
    }
  }
  return '/* LOGICAL_EXPRESSION */'
}

/**
 * Transform spacing and color tokens throughout CSS
 */
function transformTokensInCss(css) {
  // Protect existing var() declarations
  const varProtections = []
  css = css.replace(/var\([^)]+\)/g, match => {
    const index = varProtections.length
    varProtections.push(match)
    return `__VAR_PROTECTION_${index}__`
  })

  // Transform spacing tokens - handle multi-value patterns (1-4 values)
  // Function to transform spacing token values
  const transformSpacingValues = (property, valuesString) => {
    const values = valuesString.trim().split(/\s+/)
    const transformedValues = values.map(value => {
      // If it's a spacing token, transform it
      if (/^(xs|sm|md|lg|xl|xxl|3xl)$/.test(value)) {
        return `var(--spacing-${value})`
      }
      // Otherwise keep as-is (0, auto, etc.)
      return value
    })
    return `${property}: ${transformedValues.join(' ')}`
  }

  // Transform padding (shorthand and individual properties)
  css = css.replace(
    /\b(padding(?:-(?:top|right|bottom|left))?):\s*([^;]+)/g,
    (match, property, values) => {
      return transformSpacingValues(property, values)
    }
  )

  // Transform margin (shorthand and individual properties)
  css = css.replace(
    /\b(margin(?:-(?:top|right|bottom|left))?):\s*([^;]+)/g,
    (match, property, values) => {
      return transformSpacingValues(property, values)
    }
  )

  // Transform other spacing properties (border-radius, etc.)
  css = css.replace(/\b(border-radius):\s*([^;]+)/g, (match, property, values) => {
    return transformSpacingValues(property, values)
  })

  // Transform height and width with spacing tokens or pixel values
  css = css.replace(/\b(height|width):\s*([^;]+)/g, (match, property, values) => {
    const value = values.trim()
    // Handle pixel values - convert to height variables
    if (/^\d+px$/.test(value)) {
      const pixels = value.replace('px', '')
      return `${property}: var(--height-${pixels})`
    }
    // Handle spacing tokens - convert to height variables
    if (/^(xs|sm|md|lg|xl|xxl|3xl)$/.test(value)) {
      return `${property}: var(--height-${value})`
    }
    // Other values (100vh, 100%, auto, etc.) pass through unchanged
    return match
  })

  // Transform color tokens - only standalone color values
  css = css.replace(/\bbackground-color:\s*([a-z]+-\d+)\b/g, 'background-color: var(--color-$1)')
  css = css.replace(/\bcolor:\s*([a-z]+-\d+)\b/g, 'color: var(--color-$1)')
  css = css.replace(/\boutline-color:\s*([a-z]+-\d+)\b/g, 'outline-color: var(--color-$1)')

  // Restore protected var() declarations
  varProtections.forEach((protection, index) => {
    css = css.replace(`__VAR_PROTECTION_${index}__`, protection)
  })

  return css
}
