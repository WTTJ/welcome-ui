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

  // Process expressions (interpolations)
  expressions.forEach((expr, index) => {
    const transformed = processExpression(expr, mixins)

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

  // Combine static parts with transformed expressions
  for (let i = 0; i < quasi.quasis.length; i++) {
    const quasiValue = quasi.quasis[i].value.cooked || quasi.quasis[i].value.raw
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

  // Transform spacing and color tokens in the CSS
  css = transformTokensInCss(css)

  // Post-process to properly comment out problematic CSS rules
  css = postProcessComments(css)

  // Add conditional modifiers as nested selectors
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
    .replace(/([^:]+):\s*;\s*$/gm, '') // Remove properties with empty values like "margin-top: ;"
    .replace(/;\s*;/g, ';') // Fix double semicolons
    .replace(/;\s*\n/g, ';\n') // Clean up semicolons
    .replace(/^\s*;\s*$/gm, '') // Remove lines with just semicolons
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Reduce multiple empty lines
    .replace(/^\s*\n/gm, '') // Remove leading empty lines

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
  css = css.replace(/\s*__FUNCTION_EXPRESSION_COMMENT__\s*/g, () => {
    return `\n  /* FUNCTION_EXPRESSION - NEEDS_MANUAL_REVIEW */`
  })

  // Handle function expression comments in property context
  css = css.replace(/([^{}]*?):\s*__FUNCTION_EXPRESSION_COMMENT__[^;]*;/g, (match, property) => {
    return `/* FUNCTION_EXPRESSION - NEEDS_MANUAL_REVIEW: ${property.trim()}: <expression>; */`
  })

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
 */
function processCallExpression(expr) {
  if (expr.callee.name === 'th') {
    const arg = expr.arguments[0]
    if (arg && arg.type === 'StringLiteral') {
      return transformThemeFunction(`th('${arg.value}')`)
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
function processExpression(expr, mixins) {
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
      return processIdentifier(expr)

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
 * Process identifier references
 */
function processIdentifier(expr) {
  const name = expr.name

  // Component selectors like ${OrganizationLogo}, ${OrganizationName}
  if (
    name.includes('Organization') ||
    name.includes('Component') ||
    name.includes('Logo') ||
    name.includes('Name')
  ) {
    return `__COMPONENT_SELECTOR_COMMENT__${name}__`
  }

  // CSS/Style variable references like ${triggerActiveStyles}
  if (
    name.includes('Style') ||
    name.includes('styles') ||
    name.includes('CSS') ||
    name.includes('css')
  ) {
    const mixinName = name
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '')
    return `@include ${mixinName}`
  }

  // Constants like TOPNAV_HEIGHT
  if (name === name.toUpperCase()) {
    return `var(--${name.toLowerCase().replace(/_/g, '-')})`
  }

  // Other identifiers - likely component props
  return `/* WUI V9 TO MIGRATE - DYNAMIC VALUE: ${name} */`
}

/**
 * Process logical expressions: ${prop && css`...`} or ${!prop && css`...`}
 */
function processLogicalExpression(expr, mixins) {
  // For ${elevated && css`...`} patterns, we return a nested class selector
  if (expr.operator === '&&' && expr.left.type === 'Identifier') {
    const propName = expr.left.name
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
  }

  // For ${!$isExpanded && css`...`} patterns
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
      return `
  
  .${className} {
    ${nestedCss}
  }`
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

  // Transform spacing tokens - be more specific to avoid conflicts
  css = css.replace(/\bpadding:\s*(xs|sm|md|lg|xl|xxl|3xl)\b/g, 'padding: var(--spacing-$1)')
  css = css.replace(/\bmargin:\s*(xs|sm|md|lg|xl|xxl|3xl)\b/g, 'margin: var(--spacing-$1)')
  css = css.replace(
    /\bpadding:\s*(xs|sm|md|lg|xl|xxl|3xl)\s+(xs|sm|md|lg|xl|xxl|3xl)\b/g,
    'padding: var(--spacing-$1) var(--spacing-$2)'
  )
  css = css.replace(
    /\bborder-radius:\s*(xs|sm|md|lg|xl|xxl|3xl)\b/g,
    'border-radius: var(--spacing-$1)'
  )
  css = css.replace(/\bheight:\s*(\d+)px\b/g, 'height: var(--spacing-$1)')
  css = css.replace(/\bwidth:\s*(\d+)px\b/g, 'width: var(--spacing-$1px)')

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
