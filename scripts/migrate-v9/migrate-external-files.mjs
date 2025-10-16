/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import { getModule } from './helpers/esm.mjs'
import { extractMixins } from './helpers/extract-mixins.mjs'
import { shouldExcludeFile } from './helpers/file-filters.mjs'
import { copyDirSync, deleteDirRecursive } from './helpers/file-utils.mjs'
import { formatScssContent } from './helpers/format-with-stylelint.mjs'
import { isStyledComponent } from './helpers/styled-component-patterns.mjs'
import { migrateComponentFile } from './migrate-component.mjs'
import { migrateStylesTsToScss } from './migrate-stylesheet.mjs'

const traverse = getModule(traverseModule)

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
    const stylesScss = path.join(workingDir, 'styles.module.scss')
    if (!fs.existsSync(stylesTs)) return

    // Use babel to extract stylesMap
    const content = fs.readFileSync(stylesTs, 'utf8')
    const ast = parse(content, {
      plugins: ['typescript'],
      sourceType: 'module',
    })
    const stylesMap = {}
    let mixins = new Map()
    let cssVariables = new Map()

    traverse(ast, {
      VariableDeclaration(path) {
        path.node.declarations.forEach(node => {
          // Extract CSS template literals for mixins (AST-based approach)
          mixins = extractMixins({
            cssVariables,
            mixins,
            node,
          })

          if (node.init && isStyledComponent(node.init)) {
            const compName = node.id.name
            let { as, tag, variant } = getStyledTag(node.init)
            tag = stripBox(tag)
            stylesMap[compName] = { as, tag, variant }
          }
        })
      },
    })

    let scss = migrateStylesTsToScss({ cssVariables, mixins, path: stylesTs })

    try {
      // Format SCSS with stylelint and prettier
      scss = await formatScssContent(scss, stylesScss)
    } finally {
      fs.writeFileSync(stylesScss, scss, 'utf8')
    }

    // Update component files in the same dir (excluding test and story files)
    const files = fs
      .readdirSync(workingDir)
      .filter(f => f.endsWith('.tsx') && f !== 'styles.tsx' && !shouldExcludeFile(f))
    for (const f of files) {
      await migrateComponentFile({
        componentPath: path.join(workingDir, f),
        cssVariables,
        stylesMap,
      })
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

/**
 * Map component names to appropriate HTML tags
 */
function getHtmlTagFromComponent(componentName) {
  const componentMap = {
    Article: 'article',
    Aside: 'aside',
    Box: 'div',
    Footer: 'footer',
    h1: 'Text',
    h2: 'Text',
    h3: 'Text',
    h4: 'Text',
    h5: 'Text',
    h6: 'Text',
    Header: 'header',
    Image: 'img',
    Input: 'input',
    Link: 'Link',
    List: 'ul',
    ListItem: 'li',
    Main: 'main',
    Nav: 'nav',
    p: 'Text',
    Section: 'section',
  }

  return componentMap[componentName] ?? componentName ?? 'div'
}

/**
 * Extract the HTML tag from a styled component
 * Handles various patterns and defaults to 'div'
 */
function getStyledTag(node) {
  let tagName
  let as

  // Pattern 1: styled.div`` -> 'div'
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    tagName = node.tag.property.name
    as = tagName
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
      tagName = arg.name
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
      tagName = arg.name
    }
  }

  // Remove Box suffix if present e.g. buttonBox -> button
  tagName = tagName?.replace(/(.+)Box$/, '$1') // Default to removing 'Box' suffix
  as = as?.replace(/(.+)Box$/, '$1') // Default to removing 'Box' suffix
  const tag = getHtmlTagFromComponent(tagName) || 'div'

  if (as === tag) {
    as = undefined
  }

  return { as, tag }
}

function stripBox(tag) {
  return tag.endsWith('Box') ? tag.slice(0, -3) : tag
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
