#!/usr/bin/env node

import { transformCssAst } from './css-ast-transformer.mjs'

/**
 * Test Task 1.4: CallExpression nodes (th() function calls)
 * This tests the transformation of theme function calls like:
 * ${th('space.md')} → var(--spacing-md)
 * ${th('texts.h4')} → var(--text-h4)
 */

console.log('=== Task 1.4 Test: CallExpression (th() functions) ===')
console.log('')

// Test 1: th('space.md') → var(--spacing-md)
const templateLiteralWithThemeSpace = {
  type: 'TemplateLiteral',
  quasis: [
    { value: { cooked: '\n  margin: ', raw: '\\n  margin: ' } },
    { value: { cooked: ';\n', raw: ';\\n' } },
  ],
}

const themeSpaceExpression = [
  {
    type: 'CallExpression',
    callee: { type: 'Identifier', name: 'th' },
    arguments: [{ type: 'StringLiteral', value: 'space.md' }],
  },
]

console.log('Test 1: Theme space function')
console.log('Input: css`margin: ${th(\'space.md\')};`')
const result1 = transformCssAst(templateLiteralWithThemeSpace, themeSpaceExpression)
console.log('Output:', result1.css.trim())
console.log('')

// Test 2: th('texts.h4') → var(--text-h4)
const templateLiteralWithThemeText = {
  type: 'TemplateLiteral',
  quasis: [
    { value: { cooked: '\n  ', raw: '\\n  ' } },
    { value: { cooked: ';\n  color: neutral-90;\n', raw: ';\\n  color: neutral-90;\\n' } },
  ],
}

const themeTextExpression = [
  {
    type: 'CallExpression',
    callee: { type: 'Identifier', name: 'th' },
    arguments: [{ type: 'StringLiteral', value: 'texts.h4' }],
  },
]

console.log('Test 2: Theme text function')
console.log('Input: css`${th(\'texts.h4\')}; color: neutral-90;`')
const result2 = transformCssAst(templateLiteralWithThemeText, themeTextExpression)
console.log('Output:', result2.css.trim())
console.log('')

// Test 3: th('colors.primary.500') → var(--color-primary-500)
const templateLiteralWithThemeColor = {
  type: 'TemplateLiteral',
  quasis: [
    { value: { cooked: '\n  background-color: ', raw: '\\n  background-color: ' } },
    { value: { cooked: ';\n', raw: ';\\n' } },
  ],
}

const themeColorExpression = [
  {
    type: 'CallExpression',
    callee: { type: 'Identifier', name: 'th' },
    arguments: [{ type: 'StringLiteral', value: 'colors.primary.500' }],
  },
]

console.log('Test 3: Theme color function')
console.log('Input: css`background-color: ${th(\'colors.primary.500\')};`')
const result3 = transformCssAst(templateLiteralWithThemeColor, themeColorExpression)
console.log('Output:', result3.css.trim())
console.log('')

// Test 4: th() without arguments → migration comment
const templateLiteralWithEmptyTh = {
  type: 'TemplateLiteral',
  quasis: [
    { value: { cooked: '\n  font-size: ', raw: '\\n  font-size: ' } },
    { value: { cooked: ';\n', raw: ';\\n' } },
  ],
}

const emptyThExpression = [
  {
    type: 'CallExpression',
    callee: { type: 'Identifier', name: 'th' },
    arguments: [],
  },
]

console.log('Test 4: Empty th() function')
console.log('Input: css`font-size: ${th()};`')
const result4 = transformCssAst(templateLiteralWithEmptyTh, emptyThExpression)
console.log('Output:', result4.css.trim())
console.log('')

console.log('✅ Task 1.4 CallExpression transformation tests complete!')