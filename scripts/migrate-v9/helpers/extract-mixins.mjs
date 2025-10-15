import { transformCssAst } from './css-ast-transformer.mjs'
import { camelToKebab } from './string-utils.mjs'

/**
 * Convert style declarations to mixins
 * e.g.
 * const triggerActiveStyles = css`
 *   color: neutral-50;
 *   background-color: beige-30;
 * `
 * to
 * @mixin trigger-active-styles {
 *   color: var(--color-neutral-50);
 *   background-color: var(--color-beige-30);
 * }
 */
export function extractMixins({ cssVariables = new Map(), mixins = new Map(), node }) {
  if (
    node.type === 'VariableDeclarator' &&
    node.init &&
    node.init.type === 'TaggedTemplateExpression' &&
    node.init.tag.name === 'css'
  ) {
    const variableName = node.id.name
    const mixinName = camelToKebab(variableName)

    // Use our AST transformer to process the CSS template literal
    const result = transformCssAst({
      cssVariables,
      mixins,
      node: node.init.quasi,
    })

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
