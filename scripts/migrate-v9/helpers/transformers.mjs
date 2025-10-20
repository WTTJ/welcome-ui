import { createMigrationComment } from './create-migration-comment.mjs'
import { transformCssAst } from './css-ast-transformer.mjs'
import { camelToKebab, convertThemePathToCssVar, propToClassName } from './string-utils.mjs'

/**
 * Rule: Transform arrow functions based on parameter and body patterns
 *
 * AST Node: ArrowFunctionExpression { params, body }
 * Examples: ({ elevated }) => elevated && css`...`
 */
export function transformArrowFunctionExpression({
  cssSelector,
  cssVariables,
  imports = new Map(),
  mixins,
  next,
  node,
  prev,
}) {
  // Rule 1: Single object pattern parameter
  if (node.params.length === 1 && node.params[0].type === 'ObjectPattern') {
    return transformObjectPatternFunction({
      cssSelector,
      cssVariables,
      imports,
      mixins,
      next,
      node,
      prev,
    })
  }

  // Rule 2: Conditional arrow functions (props => condition ? value : alternate)
  if (
    node.params.length === 1 &&
    node.params[0].type === 'Identifier' &&
    node.body.type === 'ConditionalExpression'
  ) {
    return transformConditionalArrowFunctionExpression({
      cssSelector,
      cssVariables,
      mixins,
      next,
      node,
      prev,
    })
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
export function transformCallExpression({ mixins, next, node, prev }) {
  const functionName = node.callee?.name

  // Rule 1: th() calls = theme function calls
  if (functionName === 'th') {
    return transformThemeFunction({ mixins, next, node, prev })
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
export function transformConditionalArrowFunctionExpression({
  cssSelector,
  cssVariables,
  node,
  prev,
}) {
  const conditional = node.body
  const { alternate, consequent, test } = conditional
  const testProp = test.property?.name

  const cssProperty = getAllCssPropertiesFromString(prev.value.cooked).at(-1)
  const cssVariableName = `--${cssSelector}-${cssProperty}`
  const consequentValue = getValueFromConditionalExpression(consequent)
  const alternateValue = getValueFromConditionalExpression(alternate)

  let cssValue

  if (test.type === 'BinaryExpression') {
    cssValue = `${test.left?.name} ${test.operator} '${test.right?.value}' ? '${consequentValue}' : '${alternateValue}'`
  } else if (test.type === 'MemberExpression') {
    cssValue = `${testProp} ? '${consequentValue}' : '${alternateValue}'`
  }

  cssVariables.set(cssVariableName, cssValue)

  // Create CSS variable approach
  const result = `var(${cssVariableName})`

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
export function transformConditionalExpression({ cssSelector, cssVariables, node, prev }) {
  const { alternate, consequent, test } = node

  const cssProperty = getAllCssPropertiesFromString(prev.value.cooked).at(-1)
  const cssVariableName = `--${cssSelector}-${cssProperty}`
  const consequentValue = getValueFromConditionalExpression(consequent)
  const alternateValue = getValueFromConditionalExpression(alternate)
  let cssValue

  if (test.type === 'BinaryExpression') {
    cssValue = `${test.left?.name} ${test.operator} '${test.right?.value}' ? '${consequentValue}' : '${alternateValue}'`
  } else if (test.type === 'MemberExpression') {
    cssValue = `${test.property?.name} ? '${consequentValue}' : '${alternateValue}'`
  }

  if (cssValue) {
    const css = `var(${cssVariableName});`

    cssVariables.set(cssVariableName, cssValue)

    return css
  }

  // Fallback: Create migration comment for complex conditionals
  return createMigrationComment(`\${${formatConditionalForComment(node)}}`)
}

/**
 * Rule: Transform identifiers based on their naming pattern
 *
 * AST Node Type: Identifier
 * Structure: { type: 'Identifier', name: string }
 * Examples: TOPNAV_HEIGHT, triggerActiveStyles, variant, OrganizationName
 */
export function transformIdentifier({ node }) {
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
    return `${name} /* WUI V9 TO MIGRATE: constant ${name} */`
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

/**
 * Rule: Transform logical expressions (&&, ||)
 *
 * AST Node: LogicalExpression { operator, left, right }
 * Examples: elevated && css`...`
 */
export function transformLogicalExpression({ imports = new Map(), mixins, node }) {
  // Rule 1: && operator with TaggedTemplateExpression right side
  if (node.operator === '&&' && node.right.type === 'TaggedTemplateExpression') {
    const cssContent = transformTaggedTemplateExpression({ imports, mixins, node: node.right })
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
export function transformMemberExpression({ node }) {
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
 * Rule: Transform tagged template expressions (css`...`)
 *
 * AST Node: TaggedTemplateExpression { tag, quasi }
 * Examples: css`display: flex;`
 */
export function transformTaggedTemplateExpression({
  imports = new Map(),
  mixins = new Map(),
  node,
}) {
  if (node.tag?.name === 'css') {
    // Recursively transform the nested template literal
    const result = transformCssAst({ imports, mixins, node: node.quasi })
    return result.css
  }

  return createMigrationComment('Tagged template needs manual review')
}

/**
 * Format conditional expression for migration comment
 */
function formatConditionalForComment(node) {
  const test = node.test?.name || 'condition'
  return `${test} ? consequent : alternate`
}

function getAllCssPropertiesFromString(cssString) {
  // Match all property names (word characters and hyphens before colons)
  const matches = cssString.match(/([a-z-]+)\s*:/g)
  return matches ? matches.map(match => match.replace(/\s*:$/, '')) : []
}

/**
 * Extract value from conditional expression (consequent or alternate)
 * Handles: NumericLiteral (0), CallExpression (th('space.sm')), StringLiteral ('primary-500')
 */
function getValueFromConditionalExpression(alternateOrConsequent) {
  if (alternateOrConsequent.type === 'NumericLiteral') {
    return alternateOrConsequent.value
  }

  if (
    alternateOrConsequent.type === 'CallExpression' &&
    alternateOrConsequent.callee?.name === 'th'
  ) {
    return convertThemePathToCssVar(alternateOrConsequent.arguments[0].value)
  }

  return convertThemePathToCssVar(alternateOrConsequent.value)
}

/**
 * Rule: Transform arrow functions with object destructuring parameters
 *
 * Examples: ({ elevated }) => elevated && css`...`
 */
function transformObjectPatternFunction({ imports = new Map(), mixins, node }) {
  const param = node.params[0]
  const properties = param.properties

  if (properties.length === 1 && properties[0].type === 'ObjectProperty') {
    const propName = properties[0].key.name
    const className = propToClassName(propName)

    // Rule: LogicalExpression body (prop && css`...`)
    if (node.body.type === 'LogicalExpression') {
      const bodyResult = transformLogicalExpression({ imports, mixins, node: node.body })

      return `\n  &.${className} {\n${bodyResult}\n  }`
    }
  }

  return createMigrationComment('Object pattern function needs manual review')
}

/**
 * Rule: Transform theme function calls to CSS variables
 *
 * AST Node: CallExpression { callee: { name: 'th' }, arguments: [StringLiteral] }
 * Examples: th('space.md') → var(--spacing-md)
 * Examples: ${th('texts.h4')} → WUI V9 TO MIGRATE
 */
function transformThemeFunction({ node }) {
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
    return `/* WUI V9 TO MIGRATE */\n@include ${themePath}`
  }

  // Regular theme tokens get converted to CSS variables
  return convertThemePathToCssVar(themePath)
}
