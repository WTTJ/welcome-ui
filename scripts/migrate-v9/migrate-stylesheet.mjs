import fs from 'fs'

import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import { transformCssAst } from './helpers/css-ast-transformer.mjs'
import { getModule } from './helpers/esm.mjs'
import { camelToKebab } from './helpers/string-utils.mjs'
import {
  extractTemplateLiteralFromStyled,
  isStyledComponent,
} from './helpers/styled-component-patterns.mjs'

const traverse = getModule(traverseModule)

/**
 * Converts styled-components in styles.ts to CSS classes in styles.scss
 */
export function migrateStylesTsToScss({ cssVariables = new Map(), mixins = new Map(), path }) {
  const content = fs.readFileSync(path, 'utf8')
  const ast = parse(content, {
    plugins: ['typescript'],
    sourceType: 'module',
  })
  const classDefs = []
  traverse(ast, {
    VariableDeclaration(path) {
      path.node.declarations.forEach(decl => {
        if (decl.init && isStyledComponent(decl.init)) {
          const cssSelector = decl.id.name
          const className = camelToKebab(cssSelector)

          // Extract CSS from different styled component patterns
          const css = extractCssFromStyledComponent({
            cssSelector: className,
            cssVariables,
            mixins,
            node: decl.init,
          })
          if (css) {
            // CSS transformation is now handled by extractCssFromStyledComponent
            classDefs.push(`.${className} {\n${css}\n}`)
          }
        }
      })
    },
  })

  // Generate SCSS mixins from extracted CSS template literals
  const mixinDefs = []
  for (const [mixinName, mixinData] of mixins) {
    if (mixinData && mixinData.css) {
      // Properly indent the CSS content for SCSS mixin
      const indentedCss = mixinData.css
        .split('\n')
        .map(line => (line.trim() ? `  ${line}` : ''))
        .join('\n')

      const mixinScss = `@mixin ${mixinName} {${indentedCss}
      }`
      mixinDefs.push(mixinScss)
    }
  }

  // Combine mixins and classes
  const scssContent = []
  if (mixinDefs.length > 0) {
    scssContent.push('/* Generated SCSS mixins from CSS template literals */')
    scssContent.push(...mixinDefs)
    scssContent.push('') // Empty line separator
  }
  scssContent.push(...classDefs)

  return scssContent.join('\n\n')
}

/**
 * Extract CSS content from various styled component patterns
 */
function extractCssFromStyledComponent({
  cssSelector,
  cssVariables = new Map(),
  mixins = new Map(),
  node,
}) {
  // Use the shared helper to extract the template literal
  const templateLiteral = extractTemplateLiteralFromStyled(node)

  if (templateLiteral) {
    return extractCssFromTemplateLiteral({
      cssSelector,
      cssVariables,
      mixins,
      node: templateLiteral,
    })
  }

  return null
}

/**
 * Extract CSS string from template literal, handling interpolations
 */
function extractCssFromTemplateLiteral({ cssSelector, cssVariables, mixins = new Map(), node }) {
  if (!node.quasis) return null

  // Use our enhanced AST-based CSS transformer (Phase 4: Integration)
  const result = transformCssAst({ cssSelector, cssVariables, mixins, node })

  console.debug('extractCssFromTemplateLiteral', result.cssVariables)

  // Extract CSS from the result object
  if (result && result.css) {
    return result.css.trim()
  }

  // Fallback to simple extraction if transformer returns null
  const staticParts = node.quasis.map(q => q.value.cooked || q.value.raw).filter(Boolean)

  // Join with placeholder comments for interpolations
  let fallbackCss = ''
  for (let i = 0; i < staticParts.length; i++) {
    fallbackCss += staticParts[i]
    if (i < node.expressions.length) {
      // Add a comment for the interpolation
      fallbackCss += '/* ${...} */'
    }
  }

  return fallbackCss.trim()
}
