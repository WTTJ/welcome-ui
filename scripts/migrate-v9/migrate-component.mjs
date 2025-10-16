/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

import generateModule from '@babel/generator'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import { getModule } from './helpers/esm.mjs'
import { formatWithPrettier } from './helpers/format-with-prettier.mjs'
import { camelToKebab } from './helpers/string-utils.mjs'
import { WUI_COMPONENTS } from './helpers/wui-components.mjs'

const traverse = getModule(traverseModule)
const generate = getModule(generateModule)

/**
 * Migrates component file from styled-components to CSS Modules
 * - Replaces `import * as S from './styles'` with CSS Module imports
 * - Transforms `<S.MyElement />` to `<div className={cx('my-element')} />`
 * - Injects CSS variables for dynamic styles
 * - Preserves WUI component props without transformation
 */
export async function migrateComponentFile({ componentPath, cssVariables, stylesMap }) {
  let code = fs.readFileSync(componentPath, 'utf8')

  const ast = parse(code, {
    plugins: ['typescript', 'jsx'],
    sourceType: 'module',
  })

  traverse(ast, {
    // Replace import * as S from './styles' or '../styles' with import './styles.module.scss'
    ImportDeclaration(path) {
      if (
        path.node.specifiers.length === 1 &&
        path.node.specifiers[0].type === 'ImportNamespaceSpecifier' &&
        path.node.specifiers[0].local.name === 'S' &&
        (path.node.source.value === './styles' ||
          path.node.source.value === '../styles' ||
          path.node.source.value.endsWith('/styles'))
      ) {
        // Preserve the relative path structure
        const stylesImportPath = path.node.source.value
        const scssImportPath = stylesImportPath + '.module.scss'

        // Replace with styles.module.scss import
        path.replaceWith(
          parse(`import styles from '${scssImportPath}'`, {
            sourceType: 'module',
          }).program.body[0]
        )
        // Insert const cx = classNames(styles) declaration after imports
        path.insertAfter(
          parse('const cx = classNames(styles)', {
            sourceType: 'module',
          }).program.body[0]
        )
        // Insert classNames import after the styles import (order needs to be preserved)
        path.insertAfter(
          parse("import { classNames } from 'welcome-ui/utils'", {
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
        const { as, tag } = stylesMap[compName] || { as: undefined, tag: 'div' }
        const className = camelToKebab(compName)
        let style = new Map([...cssVariables.entries()].filter(([key]) => key.includes(className)))
        if (!style.size) {
          style = undefined
        }

        // Process props and convert them appropriately
        const newAttributes = processComponentProps({
          attributes: path.node.openingElement.attributes,
          baseClassName: className,
          tag,
        })

        // Add as if available
        const asNode = as && {
          name: { name: 'as', type: 'JSXIdentifier' },
          type: 'JSXAttribute',
          value: { type: 'StringLiteral', value: as },
        }

        // Add style if available
        const styleNode = style && {
          name: { name: 'style', type: 'JSXIdentifier' },
          type: 'JSXAttribute',
          value: {
            expression: {
              expression: {
                properties: Array.from(style.entries()).map(([key, value]) => {
                  // Parse the value as a JavaScript expression instead of a string literal
                  let valueNode
                  try {
                    // Parse the value as an expression
                    const parsedExpression = parse(value, {
                      plugins: ['typescript'],
                      sourceType: 'module',
                    })
                    // Extract the expression from the parsed program
                    valueNode = parsedExpression.program.body[0].expression
                  } catch {
                    // Fallback to string literal if parsing fails
                    valueNode = { type: 'StringLiteral', value }
                  }

                  return {
                    key: { type: 'StringLiteral', value: key },
                    type: 'ObjectProperty',
                    value: valueNode,
                  }
                }),
                type: 'ObjectExpression',
              },
              type: 'TSAsExpression',
              typeAnnotation: {
                type: 'TSTypeReference',
                typeName: {
                  left: { name: 'React', type: 'Identifier' },
                  right: { name: 'CSSProperties', type: 'Identifier' },
                  type: 'TSQualifiedName',
                },
              },
            },
            type: 'JSXExpressionContainer',
          },
        }

        // Replace <S.MyElement ...> with <tag ...>
        path.node.openingElement.name = { name: tag, type: 'JSXIdentifier' }

        // Replace all attributes with processed ones
        path.node.openingElement.attributes = [...newAttributes, asNode, styleNode].filter(Boolean)

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
 * Process component attributes and transform them for v9
 */
function processComponentProps({ attributes, baseClassName, tag }) {
  const newAttributes = []
  const classNameParts = [baseClassName]

  attributes.forEach(attr => {
    if (attr.type !== 'JSXAttribute') {
      newAttributes.push(attr)
      return
    }

    const propName = attr.name.name.replace(/^\$/, '') // Remove $ prefix if present

    // Handle special props
    if (propName === 'className') {
      // We'll merge this later
      if (attr.value.type === 'StringLiteral') {
        classNameParts.push(attr.value.value)
      }
      return
    }

    if (propName === 'style') {
      newAttributes.push(attr)
      return
    }

    // If it's a WUI component, don't add classes as we don't know if the prop is a WUI prop or not
    // e.g. <Link to="xxx" /> vs <Link fishcakes />
    if (WUI_COMPONENTS.includes(tag)) {
      newAttributes.push(attr)
      return
    }

    // Handle boolean props (elevated, displayDetail, etc.)
    if (attr.value === null) {
      // Boolean prop like <Card elevated> -> add to className
      const kebabProp = camelToKebab(propName)
      classNameParts.push(kebabProp)
      return
    }

    if (
      attr.value?.type === 'JSXExpressionContainer' &&
      attr.value.expression.type === 'BooleanLiteral'
    ) {
      if (attr.value.expression.value === true) {
        // Boolean prop like <Card elevated> -> add to className
        const kebabProp = camelToKebab(propName)
        classNameParts.push(kebabProp)
        return
      } else {
        return
      }
    }

    // Handle string literal props that could be variants
    if (attr.value && attr.value.type === 'StringLiteral') {
      if (!['children', 'className', 'style'].includes(propName)) {
        // For string literals like variant="primary", we could either:
        // 1. Add to className as variant-primary
        // 2. Keep as CSS variable
        // Based on snapshot, seems like dynamic values use CSS variables
        const kebabProp = camelToKebab(propName)
        classNameParts.push(`${kebabProp}-${attr.value.value}`)
        return
      }
    }

    // Keep other props as-is (aria-*, data-*, etc.)
    newAttributes.push(attr)
  })

  // Generate className attribute with cx() wrapper

  // Wrap className parts in cx() call
  // cx('card', 'elevated') or cx('card') for single class
  const cxCallExpression = {
    arguments: classNameParts.map(part => ({
      type: 'StringLiteral',
      value: part,
    })),
    callee: { name: 'cx', type: 'Identifier' },
    type: 'CallExpression',
  }

  const classNameValue = {
    expression: cxCallExpression,
    type: 'JSXExpressionContainer',
  }

  newAttributes.push({
    name: { name: 'className', type: 'JSXIdentifier' },
    type: 'JSXAttribute',
    value: classNameValue,
  })

  return newAttributes
}
