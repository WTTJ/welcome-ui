import generateModule from '@babel/generator'
import { parse } from '@babel/parser'

import { getModule } from './esm.mjs'

const generate = getModule(generateModule)

/**
 * Ensure Stack component has correct classnames (flex, flex-col).
 * @param {string[]} classnames
 * @returns {string[]}
 */
export function getStackClassnames(classnames) {
  let result = [...classnames]
  if (!result.includes('flex')) {
    result.push('flex')
  }

  // Only add 'flex-col' if neither 'flex-row' nor 'flex-col' is present
  if (!result.includes('flex-row') && !result.includes('flex-col')) {
    result.push('flex-col')
  }

  return result.sort()
}

/**
 * Parse a JSX props string into an object.
 * Handles expressions, quoted, and unquoted values.
 * @param {string} propsString
 * @returns {Record<string, {isExpression: boolean, value: string}>}
 */
export function parsePropsString(propsString) {
  // Wrap the props string in a fake JSX element
  const code = `<X ${propsString} />`
  let ast
  try {
    ast = parse(code, { plugins: ['jsx', 'typescript'], sourceType: 'module' })
  } catch (e) {
    // fallback: return empty object if parsing fails
    // Only log error if not in test environment
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line no-console
      console.error('Failed to create ast', e)
    }
    return {}
  }
  const attrs = ast.program.body[0].expression.openingElement.attributes
  const props = {}
  let spreadCount = 0
  for (const attr of attrs) {
    if (attr.type === 'JSXAttribute') {
      const key = attr.name.name
      if (!attr.value) {
        // Boolean prop (e.g. required)
        props[key] = { isExpression: false, value: true }
      } else if (attr.value.type === 'StringLiteral') {
        props[key] = { isExpression: false, value: attr.value.value }
      } else if (attr.value.type === 'JSXExpressionContainer') {
        // Use @babel/generator to get the source code for the expression
        props[key] = {
          isExpression: true,
          value: generate(attr.value.expression).code,
        }
      }
    } else if (attr.type === 'JSXSpreadAttribute') {
      // Use @babel/generator to get the source code for the spread expression
      props[`__spread${spreadCount++}__`] = {
        isSpread: true,
        value: generate(attr.argument).code,
      }
    }
  }
  return props
}
