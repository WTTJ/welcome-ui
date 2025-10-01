/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

import generateModule from '@babel/generator'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import { getModule } from '../esm.mjs'
import { formatWithPrettier } from '../format-with-prettier.mjs'

const traverse = getModule(traverseModule)
const generate = getModule(generateModule)

export async function migrate(dir, copyDir = true) {
  let workingDir = dir
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
  function stripBox(tag) {
    return tag.endsWith('Box') ? tag.slice(0, -3) : tag
  }

  traverse(ast, {
    VariableDeclaration(path) {
      path.node.declarations.forEach(decl => {
        if (
          decl.init &&
          decl.init.type === 'TaggedTemplateExpression' &&
          decl.init.tag.type === 'MemberExpression' &&
          decl.init.tag.object.name === 'styled'
        ) {
          const compName = decl.id.name
          let tag = decl.init.tag.property.name
          tag = stripBox(tag)
          stylesMap[compName] = tag
        }
      })
    },
  })
  const scss = migrateStylesTsToScss(stylesTs)
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
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// Recursively copy a directory
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  })
}

/**
 * Main migration function
 */
function deleteDirRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const curPath = path.join(dirPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(dirPath)
  }
}

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
function migrateStylesTsToScss(stylesTsPath) {
  const content = fs.readFileSync(stylesTsPath, 'utf8')
  const ast = parse(content, {
    plugins: ['typescript'],
    sourceType: 'module',
  })
  const classDefs = []
  traverse(ast, {
    VariableDeclaration(path) {
      path.node.declarations.forEach(decl => {
        if (
          decl.init &&
          decl.init.type === 'TaggedTemplateExpression' &&
          decl.init.tag.type === 'MemberExpression' &&
          decl.init.tag.object.name === 'styled'
        ) {
          const compName = decl.id.name
          const className = camelToKebab(compName)
          // Get the CSS string from the template literal
          const quasis = decl.init.quasi.quasis
          let css = quasis.map(q => q.value.cooked).join('')
          // Replace tokens like md, lg with CSS vars
          const cssWithVars = css.replace(/\b(md|lg|sm|xl)\b/g, v => `var(--spacing-${v})`)
          classDefs.push(`.${className} {${cssWithVars}}`)
        }
      })
    },
  })
  return classDefs.join('\n\n')
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
