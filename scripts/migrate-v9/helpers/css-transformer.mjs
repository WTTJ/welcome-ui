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

  // Process expressions (interpolations)
  expressions.forEach((expr, index) => {
    transformedExpressions[index] = processExpression(expr, mixins)
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

  return css.trim()
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
 * Process function expressions (arrow functions, etc.)
 */
function processFunctionExpression() {
  // This handles complex prop-based styling functions
  // For now, mark as needing manual review
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
    return `
  /* WUI V9 TO MIGRATE: ${name} */
  /* 
  \${${name}} {
    outline-color: var(--color-beige-30) !important;
  }
  */`
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
 * Expand text variant to actual CSS properties
 */
function expandTextVariant(variant) {
  // For h4 variant, return the actual properties
  switch (variant) {
    case 'h4':
      return `
  color: var(--color-neutral-90);
  margin: 0;`
    default:
      return `/* TEXT_VARIANT_${variant.toUpperCase()} */`
  }
}

/**
 * Process individual expression nodes in template literals
 */
function processExpression(expr, mixins) {
  if (!expr) return '/* ${...} */'

  switch (expr.type) {
    case 'ArrowFunctionExpression':
    case 'FunctionExpression':
      return processFunctionExpression(expr)

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
