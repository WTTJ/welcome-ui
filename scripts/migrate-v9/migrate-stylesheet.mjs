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
 * Converts styled-components in styles.ts to CSS classes in styles.module.scss
 */
export function migrateStylesTsToScss({
  cssVariables = new Map(),
  imports = new Map(),
  mixins = new Map(),
  path,
}) {
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
            imports,
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

  // Create SCSS content
  const scssContent = []

  // Add any missing imports
  if (imports?.size > 0) {
    scssContent.push('/* Imported utilities */')
    imports.forEach((_, importName) => {
      if (importName === 'breakpoints') {
        scssContent.push(`@use 'welcome-ui-v9/utils/scss/breakpoints' as breakpoints;`)
      }
      if (importName === 'texts') {
        scssContent.push(`@import 'welcome-ui-v9/utils/scss/texts';`)
      }
    })
    scssContent.push('') // Empty line separator
  }

  // Add mixins
  if (mixinDefs.length > 0) {
    scssContent.push('/* Generated SCSS mixins from CSS template literals */')
    scssContent.push(...mixinDefs)
    scssContent.push('') // Empty line separator
  }

  // Add styles (inside @layer)
  scssContent.push('@layer components {')
  scssContent.push(...classDefs)
  scssContent.push('}')

  // Join it all up
  return scssContent.join('\n')
}

/**
 * Extract CSS content from various styled component patterns
 */
function extractCssFromStyledComponent({
  cssSelector,
  cssVariables = new Map(),
  imports = new Map(),
  mixins = new Map(),
  node,
}) {
  // Use the shared helper to extract the template literal
  const templateLiteral = extractTemplateLiteralFromStyled(node)

  if (templateLiteral) {
    return extractCssFromTemplateLiteral({
      cssSelector,
      cssVariables,
      imports,
      mixins,
      node: templateLiteral,
    })
  }

  return null
}

/**
 * Extract CSS string from template literal, handling interpolations
 */
function extractCssFromTemplateLiteral({
  cssSelector,
  cssVariables,
  imports = new Map(),
  mixins = new Map(),
  node,
}) {
  if (!node.quasis) return null

  // Use our enhanced AST-based CSS transformer (Phase 4: Integration)
  const result = transformCssAst({ cssSelector, cssVariables, imports, mixins, node })

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
