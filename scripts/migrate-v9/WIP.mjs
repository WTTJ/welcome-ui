import { camelToKebab } from './helpers/string-utils.mjs'

/**
 * Convert CSS template literals to css variables for component file
 */
export function extractCssVariables({ cssVariables = {}, node }) {
  const result = getCssVariableFromConditionalExpression(node, cssVariables)

  console.log(`🎯 AST: Extracted css variable '${result.cssVariables}'`)
  return result.cssVariables
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
export function transformCssAst2({ node }) {
  if (!node || node.type !== 'TemplateLiteral') {
    return { css: '' }
  }

  let css = ''
  let variables = new Set()
  const { expressions, quasis } = node

  const items = [...quasis, ...expressions].sort((a, b) => a.start - b.start) || []

  css = items
    .map((item, index) => {
      const prev = items[index - 1]
      const next = items[index + 1]

      // If `${OrganizationLogo}{ ... }` add comment before and start commenting css block
      if (item.type === 'Identifier') {
        return `
  /* WUI V9 TO MIGRATE */
  /* 
  \$\{${item.name}\} `
      }

      // If css block…
      if (item.type === 'TemplateElement') {
        const value = (item.value.cooked || item.value.raw).trim()

        // If empty quasi, just return empty string
        if (!value) {
          return ''
        }

        if (prev?.type === 'Identifier') {
          // If previous was Identifier, we are in a css block after a component reference
          // It can be the css block for the identifier but can also add a new css block e.g.
          // { outline-color: var(--color-beige-30) !important; } <-- css block
          // background-color: var(--color-beige-30); <-- new css block
          // Get content inside the first { ... }
          const matches = value.match(/{([^}]*)}/)
          const match = matches ? matches[0] : null

          if (match) {
            if (value !== match) {
              // If there's more content after the css block, keep it outside the comment e.g.
              // { outline-color: var(--color-beige-30) !important; } <-- css block
              // background-color: var(--color-beige-30); <-- new css block
              const rest = value.replace(match, '')
              return `${match}
*/
  ${rest}`
            } else {
              // Only the css block, close the comment e.g.
              // { outline-color: var(--color-beige-30) !important; } <-- css block
              return `${match}
*/`
            }
          }
        }

        // Regular quasi so output as-is
        return value
      }

      if (item.type === 'ConditionalExpression') {
        if (prev?.type === 'TemplateElement') {
          // Handle conditional expressions
          // background-color: ${variant === 'primary' ? 'primary-500' : 'secondary-500'};

          const { alternate, consequent, test } = item
          const cssVariable = `--component-${camelToKebab(test.left?.name || 'condition')}`
          const consequentValue = transformCssThemeTokenValues(consequent.value)
          const alternateValue = transformCssThemeTokenValues(alternate.value)
          const cssValue = `${test.left?.name} ${test.operator} ${test.right?.value} ? ${consequentValue} : ${alternateValue}`

          const css = `var(${cssVariable}); /* WUI V9 TO MIGRATE: ${cssValue} */`
          const styleForComponent = { [cssVariable]: cssValue }
          variables.add(styleForComponent)

          return css
        }
      }
    })
    .join('')

  // Apply final CSS cleanup
  css = cleanupCss(css)

  return { css, variables }
}

function getCssVariableFromConditionalExpression(item, cssVariables = new Map()) {
  const { alternate, consequent, test } = item

  const name = test.left?.name ?? test.property?.name ?? 'condition'
  const cssVariableName = `--component-${camelToKebab(name)}`
  const consequentValue = getValueFromConditionalExpression(consequent)
  const alternateValue = getValueFromConditionalExpression(alternate)
  let cssValue

  if (test.type === 'BinaryExpression') {
    cssValue = `${test.left?.name} ${test.operator} ${test.right?.value} ? ${consequentValue} : ${alternateValue}`
  } else if (test.type === 'MemberExpression') {
    cssValue = `${test.property?.name} ? ${consequentValue} : ${alternateValue}`
  }

  const css = `var(${cssVariableName}); /* WUI V9 TO MIGRATE: ${cssValue} */`

  cssVariables.set(cssVariableName, cssValue)

  return { css, cssVariables }
}

function getValueFromConditionalExpression(alternateOrConsequent) {
  // isXXX ? th('space.sm') : 0
  //                          ^
  if (alternateOrConsequent.type === 'NumericLiteral') {
    return alternateOrConsequent.value
  }

  // isXXX ? th('space.sm') : 0
  //         ^^^^^^^^^^^^^^
  if (
    alternateOrConsequent.type === 'CallExpression' &&
    alternateOrConsequent.callee?.name === 'th'
  ) {
    return transformCssThemeTokenValues(alternateOrConsequent.arguments[0].value)
  }

  // isXXX ? 'primary-500' : 'secondary-500'
  //         ^^^^^^^^^^^^^
  return transformCssThemeTokenValues(alternateOrConsequent.value)
}

/**
 * Transform theme tokens in CSS values to CSS variables
 * Examples:
 *   'lg;' → 'var(--spacing-lg);'
 *   'space-lg;' → 'var(--spacing-lg);'
 *   'primary-500;' → 'var(--color-primary-500);'
 */
function transformCssThemeTokenValues(cssValue) {
  if (!cssValue) return undefined

  if (cssValue.startsWith('space')) {
    cssValue = cssValue.split('.')[1]
  }

  // Transform spacing tokens (xs, sm, md, lg, xl, xxl, 3xl)
  const spacingTokens = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl']
  for (const token of spacingTokens) {
    // Match token as CSS value (at word boundary, followed by ; or space or end of string)
    const regex = new RegExp(`\\b${token}(\\s*[;}]|\\s+|$)`, 'g')
    if (regex.test(cssValue)) {
      const transformedValue = cssValue.replace(regex, `var(--spacing-${token})$1`)
      return transformedValue
    }
  }

  // Transform color tokens (pattern: word-number like primary-500, secondary-100)
  const colorTokenRegex = /([a-z]+-\d+)/g
  return cssValue.replace(colorTokenRegex, `var(--color-$1)`)
}
