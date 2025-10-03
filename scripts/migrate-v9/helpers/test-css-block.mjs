#!/usr/bin/env node

import { transformCssAst } from './css-ast-transformer.mjs'

/**
 * Test CSS block preservation in migration comments
 * This tests the functionality that preserves entire CSS blocks like:
 * ${OrganizationName} { bottom: 0; }
 */

// Simulate a TemplateLiteral AST node with CSS block pattern
const templateLiteralWithBlock = {
  type: 'TemplateLiteral',
  quasis: [
    {
      value: { cooked: '\n  ', raw: '\n  ' },
    },
    {
      value: { cooked: ' {\n    bottom: 0;\n  }\n', raw: ' {\\n    bottom: 0;\\n  }\\n' },
    },
    {
      value: { cooked: '', raw: '' },
    },
  ],
}

const expressions = [
  {
    type: 'Identifier',
    name: 'OrganizationName',
  },
]

console.log('=== CSS Block Preservation Test ===')
console.log('')

console.log('Input CSS pattern:')
console.log('css`')
console.log('  ${OrganizationName} {')
console.log('    bottom: 0;')
console.log('  }')
console.log('`')
console.log('')

const result = transformCssAst(templateLiteralWithBlock, expressions)

console.log('Output:')
console.log('css`')
console.log(result.css)
console.log('`')
console.log('')

// Check if the output correctly preserves the CSS block structure
const hasCorrectComment = result.css.includes('/* WUI V9 TO MIGRATE */')
const preservesBlock = result.css.includes('OrganizationName')
const preservesCssStructure = result.css.includes('bottom: 0')

console.log('Validation:')
console.log(`✅ Has migration comment: ${hasCorrectComment}`)
console.log(`✅ Preserves identifier: ${preservesBlock}`)
console.log(`✅ Preserves CSS structure: ${preservesCssStructure}`)

if (hasCorrectComment && preservesBlock && preservesCssStructure) {
  console.log('')
  console.log('🎉 CSS Block preservation working correctly!')
} else {
  console.log('')
  console.log('❌ CSS Block preservation needs adjustment')
}