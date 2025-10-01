import fs from 'fs'

import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import { getModule } from '../esm.mjs'
import { parsePropsString } from './parsing.mjs'

const traverse = getModule(traverseModule)

/**
 * For a given file, find all JSX component and subcomponent usages and push their info to results.
 * Uses parsePropsString to extract props for each found component.
 * Only includes components whose root name is in the provided whitelist.
 * @param {string} filePath
 * @param {Array} results
 * @param {Set<string>} whitelist - Set of allowed component root names
 */
export function processFile(filePath, results, whitelist) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    const content = fs.readFileSync(filePath, 'utf8')
    let ast
    try {
      ast = parse(content, { plugins: ['jsx', 'typescript'], sourceType: 'module' })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Failed to parse file:', filePath)
      return
    }

    traverse(ast, {
      JSXOpeningElement(path) {
        const nameNode = path.node.name
        let componentName = ''

        // Extract component name, supporting subcomponents (e.g., Breadcrumb.Item)
        if (nameNode.type === 'JSXIdentifier') {
          componentName = nameNode.name
        } else if (nameNode.type === 'JSXMemberExpression') {
          // Recursively build the full name (e.g., Breadcrumb.Item)
          function getFullJSXName(node) {
            if (node.type === 'JSXIdentifier') return node.name
            if (node.type === 'JSXMemberExpression') {
              return getFullJSXName(node.object) + '.' + getFullJSXName(node.property)
            }
            return ''
          }
          componentName = getFullJSXName(nameNode)
        }

        // Only process if root name is in whitelist
        const rootName = componentName.split('.')[0]
        if (!whitelist || !whitelist.has(rootName)) return

        // Get the full opening tag source
        const start = path.node.start
        const end = path.node.end
        const fullMatch = content.slice(start, end)

        // Reconstruct the props string (everything after <Component and before > or />)
        const openTag = `<${componentName}`
        let propsString = fullMatch.slice(openTag.length, fullMatch.endsWith('>') ? -1 : -2).trim()

        // Remove trailing slash if present (for self-closing tags)
        if (propsString.endsWith('/')) {
          propsString = propsString.slice(0, -1).trim()
        }

        const props = parsePropsString(propsString)

        results.push({
          componentType: componentName,
          file: filePath,
          line: content.substring(0, start).split('\n').length,
          matchIndex: start,
          originalMatch: fullMatch,
          props: props,
        })
      },
    })
  }
}
