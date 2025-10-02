/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

import generateModule from '@babel/generator'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import {
  extractCssTemplateLiterals,
  transformStyledComponentCss,
} from './helpers/css-transformer.mjs'
import { getModule } from './helpers/esm.mjs'
import { copyDirSync, deleteDirRecursive } from './helpers/file-utils.mjs'
import { formatWithPrettier } from './helpers/format-with-prettier.mjs'

const traverse = getModule(traverseModule)
const generate = getModule(generateModule)

export async function migrate(dir, copyDir = true) {
  let workingDir = dir
  let tempDir = null

  try {
    if (copyDir) {
      const parent = path.dirname(dir)
      const base = path.basename(dir)
      const dest = path.join(parent, base + '-Migrated')
      if (fs.existsSync(dest)) {
        console.log(`Destination directory already exists, deleting: ${dest}`)
        deleteDirRecursive(dest)
      }
      copyDirSync(dir, dest)
      workingDir = dest
      tempDir = dest // Track temp directory for cleanup
      console.log(`Copied ${dir} to ${dest}`)
    }

    const stylesTs = path.join(workingDir, 'styles.ts')
    const stylesScss = path.join(workingDir, 'styles.scss')
    if (!fs.existsSync(stylesTs)) return

    // Use babel to extract stylesMap
    const content = fs.readFileSync(stylesTs, 'utf8')
    const ast = parse(content, {
      plugins: ['typescript'],
      sourceType: 'module',
    })
    const stylesMap = {}
    const extractedMixins = new Map()
    function stripBox(tag) {
      return tag.endsWith('Box') ? tag.slice(0, -3) : tag
    }

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach(decl => {
          // Extract CSS template literals for mixins
          extractCssTemplateLiterals(decl, extractedMixins)

          if (decl.init && isStyledComponent(decl.init)) {
            const compName = decl.id.name
            let tag = getStyledTag(decl.init)
            tag = stripBox(tag)
            stylesMap[compName] = tag
          }
        })
      },
    })
    const scss = migrateStylesTsToScss(stylesTs, extractedMixins)
    try {
      const formatted = await formatWithPrettier(scss, stylesScss)
      fs.writeFileSync(stylesScss, formatted, 'utf8')
    } catch (e) {
      console.warn('Prettier formatting failed:', e)
      fs.writeFileSync(stylesScss, scss, 'utf8')
    }

    // Update component files in the same dir
    const files = fs.readdirSync(workingDir).filter(f => f.endsWith('.tsx') && f !== 'styles.tsx')
    for (const f of files) {
      await migrateComponentFile(path.join(workingDir, f), stylesMap)
    }
  } catch (error) {
    // If there's an error and we created a temp directory, clean it up
    if (tempDir && copyDir && fs.existsSync(tempDir)) {
      console.log(`Migration failed, cleaning up temp directory: ${tempDir}`)
      deleteDirRecursive(tempDir)
    }
    throw error // Re-throw the error
  }
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Extract CSS content from various styled component patterns
 */
function extractCssFromStyledComponent(node, mixins = new Map()) {
  // Pattern 1: styled.div`css` (simple TaggedTemplateExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    return extractCssFromTemplateLiteral(node.quasi, mixins)
  }

  // Pattern 2: styled(Box)`css` (TaggedTemplateExpression with CallExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'CallExpression' &&
    node.tag.callee.name === 'styled'
  ) {
    return extractCssFromTemplateLiteral(node.quasi, mixins)
  }

  // Pattern 3: styled(Box)((props) => css`...`) (CallExpression with function)
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'TaggedTemplateExpression' &&
    node.callee.tag.type === 'CallExpression' &&
    node.callee.tag.callee.name === 'styled'
  ) {
    // The function argument contains the CSS
    const funcArg = node.arguments[0]
    if (
      funcArg &&
      (funcArg.type === 'ArrowFunctionExpression' || funcArg.type === 'FunctionExpression')
    ) {
      // Look for css`` template literal in the function body
      if (funcArg.body.type === 'TaggedTemplateExpression' && funcArg.body.tag.name === 'css') {
        return extractCssFromTemplateLiteral(funcArg.body.quasi, mixins)
      }
    }
  }

  return null
}

/**
 * Extract CSS string from template literal, handling interpolations
 */
function extractCssFromTemplateLiteral(quasi, mixins = new Map()) {
  if (!quasi.quasis) return null

  // Use our enhanced CSS transformer instead of just adding placeholders
  const result = transformStyledComponentCss(quasi, quasi.expressions || [], mixins)

  // Extract CSS from the result object
  if (result && result.css) {
    return result.css.trim()
  }

  // Fallback to simple extraction if transformer returns null
  const staticParts = quasi.quasis.map(q => q.value.cooked || q.value.raw).filter(Boolean)

  // Join with placeholder comments for interpolations
  let fallbackCss = ''
  for (let i = 0; i < staticParts.length; i++) {
    fallbackCss += staticParts[i]
    if (i < quasi.expressions.length) {
      // Add a comment for the interpolation
      fallbackCss += '/* ${...} */'
    }
  }

  return fallbackCss.trim()
}

/**
 * Map component names to appropriate HTML tags
 */
function getHtmlTagFromComponent(componentName) {
  const componentMap = {
    Article: 'article',
    Aside: 'aside',
    Box: 'div',
    Footer: 'footer',
    Header: 'header',
    Image: 'img',
    Input: 'input',
    List: 'ul',
    ListItem: 'li',
    Main: 'main',
    Nav: 'nav',
    Section: 'section',
  }

  return componentMap[componentName] || 'div'
}

/**
 * Extract the HTML tag from a styled component
 * Handles various patterns and defaults to 'div'
 */
function getStyledTag(node) {
  // Pattern 1: styled.div`` -> 'div'
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    return node.tag.property.name
  }

  // Pattern 2: styled(Box)`` -> 'div' (Box component becomes div)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'CallExpression' &&
    node.tag.callee.name === 'styled'
  ) {
    const arg = node.tag.arguments[0]
    if (arg.type === 'Identifier') {
      // For known components like Box, return appropriate HTML tag
      return getHtmlTagFromComponent(arg.name)
    }
  }

  // Pattern 3: styled(Box)(...)`...` -> 'div'
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'TaggedTemplateExpression' &&
    node.callee.tag.type === 'CallExpression' &&
    node.callee.tag.callee.name === 'styled'
  ) {
    const arg = node.callee.tag.arguments[0]
    if (arg.type === 'Identifier') {
      return getHtmlTagFromComponent(arg.name)
    }
  }

  return 'div' // Default fallback
}

/**
 * Check if a node represents a styled component
 * Handles both: styled.div`` and styled(Box)`` patterns
 */
function isStyledComponent(node) {
  // Pattern 1: styled.div`...` (TaggedTemplateExpression with MemberExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    return true
  }

  // Pattern 2: styled(Box)`...` (TaggedTemplateExpression with CallExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'CallExpression' &&
    node.tag.callee.name === 'styled'
  ) {
    return true
  }

  // Pattern 3: styled(Box)(...)`...` (CallExpression with styled(Component) and generics/props)
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'TaggedTemplateExpression' &&
    node.callee.tag.type === 'CallExpression' &&
    node.callee.tag.callee.name === 'styled'
  ) {
    return true
  }

  return false
}

// Recursively copy a directory
/**
 * Updates component file: replaces <S.MyElement /> with <li className="my-element" />
 */
async function migrateComponentFile(componentPath, stylesMap) {
  let code = fs.readFileSync(componentPath, 'utf8')
  const ast = parse(code, {
    plugins: ['typescript', 'jsx'],
    sourceType: 'module',
  })

  // Replace import * as S from './styles' with import './styles.scss'
  traverse(ast, {
    ImportDeclaration(path) {
      if (
        path.node.specifiers.length === 1 &&
        path.node.specifiers[0].type === 'ImportNamespaceSpecifier' &&
        path.node.specifiers[0].local.name === 'S' &&
        path.node.source.value === './styles'
      ) {
        path.replaceWith(
          parse("import './styles.scss'", {
            sourceType: 'module',
          }).program.body[0]
        )
      }
    },
    JSXElement(path) {
      if (
        path.node.openingElement.name.type === 'JSXMemberExpression' &&
        path.node.openingElement.name.object.name === 'S'
      ) {
        const compName = path.node.openingElement.name.property.name
        const tag = stylesMap[compName] || 'div'
        const className = camelToKebab(compName)
        // Replace <S.MyElement ...> with <tag className="my-element" ...>
        path.node.openingElement.name = { name: tag, type: 'JSXIdentifier' }
        // Add or merge className prop
        let hasClassName = false
        path.node.openingElement.attributes.forEach(attr => {
          if (attr.type === 'JSXAttribute' && attr.name.name === 'className') {
            hasClassName = true
            // Prepend our className
            if (attr.value.type === 'StringLiteral') {
              attr.value.value = `${className} ${attr.value.value}`
            }
          }
        })
        if (!hasClassName) {
          path.node.openingElement.attributes.push({
            name: { name: 'className', type: 'JSXIdentifier' },
            type: 'JSXAttribute',
            value: { type: 'StringLiteral', value: className },
          })
        }
        // Replace closing tag
        if (path.node.closingElement) {
          path.node.closingElement.name = { name: tag, type: 'JSXIdentifier' }
        }
      }
    },
  })
  const output = generate(ast, {}, code).code
  try {
    const formatted = await formatWithPrettier(output, componentPath)
    fs.writeFileSync(componentPath, formatted, 'utf8')
  } catch (e) {
    console.warn('Prettier formatting failed:', e)
    fs.writeFileSync(componentPath, output, 'utf8')
  }
}

/**
 * Converts styled-components in styles.ts to CSS classes in styles.scss
 */
function migrateStylesTsToScss(stylesTsPath, extractedMixins = new Map()) {
  const content = fs.readFileSync(stylesTsPath, 'utf8')
  const ast = parse(content, {
    plugins: ['typescript'],
    sourceType: 'module',
  })
  const classDefs = []
  traverse(ast, {
    VariableDeclaration(path) {
      path.node.declarations.forEach(decl => {
        if (decl.init && isStyledComponent(decl.init)) {
          const compName = decl.id.name
          const className = camelToKebab(compName)

          // Extract CSS from different styled component patterns
          const css = extractCssFromStyledComponent(decl.init, extractedMixins)
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
  for (const [mixinName, mixinData] of extractedMixins) {
    const mixinScss = `@mixin ${mixinName} {
${mixinData.css}
}`
    mixinDefs.push(mixinScss)
  }

  // Combine mixins and classes
  const scssContent = []
  if (mixinDefs.length > 0) {
    scssContent.push('// Generated SCSS mixins from CSS template literals')
    scssContent.push(...mixinDefs)
    scssContent.push('') // Empty line separator
  }
  scssContent.push(...classDefs)

  return scssContent.join('\n\n')
}

// Usage: node migrate-wui-v9.mjs path/to/component/dir
if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = process.argv[2]
  if (!dir) {
    console.error('Usage: node migrate-wui-v9.mjs path/to/component/dir')
    process.exit(1)
  }
  migrate(dir, true).catch(e => {
    console.error('Migration failed:', e)
    process.exit(1)
  })
}

export { migrateComponentFile, migrateStylesTsToScss }
