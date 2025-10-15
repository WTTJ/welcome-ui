import { createMigrationComment } from './create-migration-comment.mjs'
import { camelToKebab } from './string-utils.mjs'
import {
  transformArrowFunctionExpression,
  transformCallExpression,
  transformConditionalArrowFunctionExpression,
  transformConditionalExpression,
  transformIdentifier,
  transformLogicalExpression,
  transformMemberExpression,
  transformTaggedTemplateExpression,
} from './transformers.mjs'

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
export function transformCssAst({ cssSelector, cssVariables, mixins = new Map(), node }) {
  if (!node || node.type !== 'TemplateLiteral') {
    return { css: '', mixins }
  }

  let css = ''
  const { expressions, quasis } = node

  const children = [...quasis, ...expressions].sort((a, b) => a.start - b.start) || []

  children.forEach((node, index) => {
    let value = node?.value?.cooked || node?.value?.raw || ''
    const prev = children[index - 1]
    const next = children[index + 1]

    if (prev?.type === 'Identifier') {
      // If previous was Identifier, we could be in a css block after a component reference
      // It can be the css block for the identifier but can also add a new css block e.g.
      // { outline-color: var(--color-beige-30) !important; } <-- css block
      // background-color: var(--color-beige-30); <-- new css block
      // Get content inside the first { ... }
      const match = value.match(/{([^}]*)}/)?.[0] ?? null
      const isNewRule = value.match(/@media/)?.[0] ?? null

      if (match && !isNewRule) {
        if (value !== match) {
          // If there's more content after the css block, keep it outside the comment e.g.
          // { outline-color: var(--color-beige-30) !important; } <-- css block
          // background-color: var(--color-beige-30); <-- new css block
          const rest = value.replace(match, '')
          value = `${match}
*/
  ${rest}`
        } else {
          // Only the css block, close the comment e.g.
          // { outline-color: var(--color-beige-30) !important; } <-- css block
          value = `${match}
*/`
        }
      }
    }

    // Step 1: Add the static CSS text from this quasi
    css += value

    // Regular expression transformation
    const transformedExpression = transformExpression({
      cssSelector,
      cssVariables,
      mixins,
      next,
      node,
      prev,
    })

    css += transformedExpression
  })

  // Step 3: Apply final CSS cleanup
  css = cleanupCss(css)

  return { css, cssVariables, mixins }
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

  const fontWeightTokens = ['regular', 'medium', 'bold']
  fontWeightTokens.forEach(token => {
    // Match token as CSS value (preceded by : or space, followed by ; or space)
    const regex = new RegExp(`(:\\s*|\\s+)${token}(\\s*[;}]|\\s+)`, 'g')
    css = css.replace(regex, `$1var(--font-weight-${token})$2`)
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
function transformExpression({ cssSelector, cssVariables, mixins, next, node, prev }) {
  if (!node) return ''

  // Rule-based transformation by AST node type
  switch (node.type) {
    case 'ArrowFunctionExpression':
      return transformArrowFunctionExpression({
        cssSelector,
        cssVariables,
        mixins,
        next,
        node,
        prev,
      })

    case 'CallExpression':
      return transformCallExpression({ cssSelector, cssVariables, mixins, next, node, prev })

    case 'ConditionalArrowFunctionExpression':
      return transformConditionalArrowFunctionExpression({
        cssSelector,
        cssVariables,
        mixins,
        next,
        node,
        prev,
      })

    case 'ConditionalExpression':
      return transformConditionalExpression({ cssSelector, cssVariables, mixins, next, node, prev })

    case 'Identifier':
      return transformIdentifier({ cssSelector, cssVariables, mixins, next, node, prev })

    case 'Literal':
    case 'StringLiteral':
    case 'TemplateLiteral':
      return node.value || ''

    case 'LogicalExpression':
      return transformLogicalExpression({ cssSelector, cssVariables, mixins, next, node, prev })

    case 'MemberExpression':
      return transformMemberExpression({ cssSelector, cssVariables, mixins, next, node, prev })

    case 'TaggedTemplateExpression':
      return transformTaggedTemplateExpression({
        cssSelector,
        cssVariables,
        mixins,
        next,
        node,
        prev,
      })

    case 'TemplateElement':
      return transformCssAst({ cssSelector, cssVariables, mixins, node }).css

    default:
      // Unknown expression - add migration comment
      return createMigrationComment(`Unknown expression type: ${node.type}`)
  }
}
