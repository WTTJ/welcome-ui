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

  // Store any discovered mixins for later extraction
  if (mixins.size === 0) {
    // Initialize mixins if needed
  }

  // Process expressions (interpolations)
  expressions.forEach((expr, index) => {
    if (expr.type === 'CallExpression' && expr.callee.name === 'th') {
      // Transform theme function calls
      const arg = expr.arguments[0]
      if (arg && arg.type === 'StringLiteral') {
        const transformed = transformThemeFunction(`th('${arg.value}')`)
        transformedExpressions[index] = transformed
      }
    } else if (expr.type === 'ConditionalExpression') {
      // Handle ternary expressions: ${condition ? value1 : value2}
      transformedExpressions[index] = '/* CONDITIONAL_EXPRESSION */'
    } else if (expr.type === 'LogicalExpression') {
      // Handle logical expressions: ${prop && css`...`}
      transformedExpressions[index] = '/* LOGICAL_EXPRESSION */'
    } else if (expr.type === 'Identifier') {
      // Handle variable references: ${TOPNAV_HEIGHT}, ${OrganizationName}
      if (
        expr.name.includes('Component') ||
        expr.name.includes('Logo') ||
        expr.name.includes('Name')
      ) {
        transformedExpressions[index] =
          `/* WUI V9 TO MIGRATE: ${expr.name} */ .${expr.name.toLowerCase()}`
      } else if (
        expr.name.includes('Style') ||
        expr.name.includes('styles') ||
        expr.name.includes('CSS') ||
        expr.name.includes('css')
      ) {
        // Convert CSS mixin references to SCSS @include
        const mixinName = expr.name
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '')
        transformedExpressions[index] = `@include ${mixinName}`
      } else if (expr.name === expr.name.toUpperCase()) {
        // Constants like TOPNAV_HEIGHT -> CSS variables
        transformedExpressions[index] = `var(--${expr.name.toLowerCase().replace(/_/g, '-')})`
      } else {
        // Other identifiers might be component props or dynamic values
        transformedExpressions[index] = `/* WUI V9 TO MIGRATE - DYNAMIC VALUE: ${expr.name} */`
      }
    } else {
      // Fallback for other expression types
      transformedExpressions[index] = '/* ${...} */'
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
        // Special handling for text variants - this will be processed by component transformer
        css += `/* TEXT_VARIANT_${transformedExpressions[i].variant.toUpperCase()} */`
      } else {
        css += transformedExpressions[i]
      }
    }
  }

  // Transform spacing and color tokens in the CSS, but avoid already transformed variables
  // First, protect existing var() declarations by temporarily replacing them
  const varProtections = []
  css = css.replace(/var\([^)]+\)/g, match => {
    const index = varProtections.length
    varProtections.push(match)
    return `__VAR_PROTECTION_${index}__`
  })

  // Now safely transform spacing and color tokens
  css = css.replace(/\b(xs|sm|md|lg|xl|xxl|3xl)\b/g, match => {
    return `var(--spacing-${match})`
  })
  css = css.replace(/\b([a-z]+-\d+)\b/g, match => {
    return `var(--color-${match})`
  })

  // Restore the protected var() declarations
  varProtections.forEach((protection, index) => {
    css = css.replace(`__VAR_PROTECTION_${index}__`, protection)
  })

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
