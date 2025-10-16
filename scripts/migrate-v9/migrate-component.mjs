import fs from 'fs'

import generateModule from '@babel/generator'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'

import { getModule } from './helpers/esm.mjs'
import { formatWithPrettier } from './helpers/format-with-prettier.mjs'
import { camelCase, camelToKebab } from './helpers/string-utils.mjs'
import { isStyledComponent } from './helpers/styled-component-patterns.mjs'

const traverse = getModule(traverseModule)
const generate = getModule(generateModule)

/**
 * Updates component file: replaces <S.MyElement /> with <li className="my-element" />
 */
export async function migrateComponentFile({ componentPath, cssVariables, stylesMap }) {
  let code = fs.readFileSync(componentPath, 'utf8')

  const ast = parse(code, {
    plugins: ['typescript', 'jsx'],
    sourceType: 'module',
  })

  // Track style objects that need to be generated
  const styleObjectsToGenerate = new Map()

  // Collect styled component definitions for prop analysis
  const styledComponentDefinitions = new Map()

  traverse(ast, {
    ArrowFunctionExpression(path) {
      // Handle const Component = () => {} pattern
      if (path.parent.type === 'VariableDeclarator' && path.parent.id.name.includes('Component')) {
        insertStyleObjectDeclarations(path, styleObjectsToGenerate)
      }
    },
    // Insert style object declarations into component functions
    FunctionDeclaration(path) {
      if (path.node.id && path.node.id.name.includes('Component')) {
        insertStyleObjectDeclarations(path, styleObjectsToGenerate)
      }
    },
    // Replace import * as S from './styles' with import './styles.module.scss'
    ImportDeclaration(path) {
      if (
        path.node.specifiers.length === 1 &&
        path.node.specifiers[0].type === 'ImportNamespaceSpecifier' &&
        path.node.specifiers[0].local.name === 'S' &&
        path.node.source.value === './styles'
      ) {
        // Replace with styles.module.scss import
        path.replaceWith(
          parse("import styles from './styles.module.scss'", {
            sourceType: 'module',
          }).program.body[0]
        )
        // Insert classNames import after the styles import
        path.insertAfter(
          parse("import { classNames } from 'welcome-ui/utils'", {
            sourceType: 'module',
          }).program.body[0]
        )
        // Insert const cx = classNames(styles) declaration after imports
        path.insertAfter(
          parse('const cx = classNames(styles)', {
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
        const { as, tag, variant } = stylesMap[compName] || 'div'
        const className = camelToKebab(compName)
        let style = new Map([...cssVariables.entries()].filter(([key]) => key.includes(className)))
        if (!style.size) {
          style = undefined
        }

        // Process props and convert them appropriately
        const { newAttributes } = processComponentProps(
          path.node.openingElement.attributes,
          compName,
          className,
          styledComponentDefinitions
        )

        // Add as if available
        const asNode = as && {
          name: { name: 'as', type: 'JSXIdentifier' },
          type: 'JSXAttribute',
          value: { type: 'StringLiteral', value: as },
        }

        // Add as if available
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
    // Collect styled component definitions for dynamic analysis
    VariableDeclarator(path) {
      const node = path.node
      if (node.id.name && isStyledComponent(node.init)) {
        const componentName = node.id.name
        let css = ''

        // Extract CSS from different styled component patterns
        if (node.init && node.init.quasi) {
          // Pattern: styled.div`css`
          css = node.init.quasi.quasis.map(q => q.value.raw).join('PLACEHOLDER')
        } else if (node.init && node.init.tag && node.init.tag.quasi) {
          // Pattern: styled(Component)`css`
          css = node.init.tag.quasi.quasis.map(q => q.value.raw).join('PLACEHOLDER')
        }

        styledComponentDefinitions.set(componentName, {
          css,
          name: componentName,
          node: node.init,
        })
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
 * Generate CSS variable assignment for non-boolean props
 */
function generateConditionalCssVariable(propName, baseClassName, attrValue) {
  // Generate CSS variable name: --wrapper-variant, --wrapper-topnav-height
  const kebabProp = camelToKebab(propName)
  const cssVarName = `--${baseClassName}-${kebabProp}`

  // Extract the value expression
  let valueExpression = propName // default to prop name
  if (attrValue && attrValue.type === 'JSXExpressionContainer') {
    const expression = attrValue.expression
    if (expression.type === 'Identifier') {
      // variant={variant} -> variant === 'primary' ? 'color-primary-500' : 'color-secondary-500'
      valueExpression = 'FIX: Identifier'
    } else if (expression.type === 'ConditionalExpression') {
      // Already a conditional, extract it properly
      // For now, use a placeholder - this needs AST transformation
      valueExpression = 'FIX: ConditionalExpression'
    }
  }

  return `'${cssVarName}': ${valueExpression}`
}

/**
 * Generate a style object variable declaration
 */
function generateStyleObjectDeclaration(styleObjectName, styleInfo) {
  const { properties } = styleInfo

  // Convert string properties to AST property nodes
  const astProperties = []

  if (properties && Array.isArray(properties)) {
    properties.forEach(prop => {
      if (typeof prop === 'string') {
        // Parse strings like "'--wrapper-variant': variant"
        const match = prop.match(/^'([^']+)':\s*(.+)$/)
        if (match) {
          const [, key, value] = match
          astProperties.push({
            computed: false,
            key: { type: 'StringLiteral', value: key },
            kind: 'init',
            method: false,
            shorthand: false,
            type: 'Property',
            value: { name: value, type: 'Identifier' },
          })
        }
      }
    })
  }

  return {
    declarations: [
      {
        id: { name: styleObjectName, type: 'Identifier' },
        init: {
          properties: astProperties,
          type: 'ObjectExpression',
        },
        type: 'VariableDeclarator',
      },
    ],
    kind: 'const',
    type: 'VariableDeclaration',
  }
}

/**
 * Insert style object declarations into component functions
 */
function insertStyleObjectDeclarations(functionPath, styleObjectsToGenerate) {
  if (styleObjectsToGenerate.size === 0) return

  // Find the function body
  const functionBody = functionPath.node.body
  if (!functionBody || functionBody.type !== 'BlockStatement') return

  // Generate variable declarations for each style object
  for (const [styleObjectName, styleInfo] of styleObjectsToGenerate) {
    const variableDeclaration = generateStyleObjectDeclaration(styleObjectName, styleInfo)

    // Insert at the beginning of the function body
    functionBody.body.unshift(variableDeclaration)
  }
}

/**
 * Process component attributes and transform them for v9
 */
function processComponentProps(attributes, compName, baseClassName) {
  const newAttributes = []
  const classNameParts = [baseClassName]
  // const styleProperties = []

  attributes.forEach(attr => {
    if (attr.type !== 'JSXAttribute') {
      newAttributes.push(attr)
      return
    }

    const propName = attr.name.name

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

    // Handle boolean props (elevated, displayDetail, etc.)
    if (attr.value === null) {
      // Boolean prop like <Card elevated> -> add to className
      const kebabProp = camelToKebab(propName)
      classNameParts.push(kebabProp)
      return
    }

    // Handle dollar props ($isActive, $isExpanded)
    if (propName.startsWith('$')) {
      const cleanPropName = propName.substring(1) // Remove $
      // For $isActive -> is-active, $isExpanded -> is-expanded
      const kebabProp = camelToKebab(cleanPropName)

      // Convert to conditional className for boolean props
      // $isActive={someVariable} -> className includes conditional logic
      if (attr.value.type === 'JSXExpressionContainer') {
        const expression = attr.value.expression
        if (expression.type === 'Identifier') {
          // For boolean props, add conditional class
          classNameParts.push(`\${${expression.name} ? '${kebabProp}' : ''}`)
        } else {
          // For literal values, add class directly if true
          classNameParts.push(kebabProp)
        }
      }
      return
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
  let classNameValue

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

  classNameValue = {
    expression: cxCallExpression,
    type: 'JSXExpressionContainer',
  }

  newAttributes.push({
    name: { name: 'className', type: 'JSXIdentifier' },
    type: 'JSXAttribute',
    value: classNameValue,
  })

  return {
    newAttributes,
  }
}
