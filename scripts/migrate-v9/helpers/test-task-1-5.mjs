#!/usr/bin/env node

import { transformCssAst } from './css-ast-transformer.mjs'

/**
 * Task 1.5: Comprehensive testing of AST transformer foundation
 * 
 * This test validates all completed functionality from Tasks 1.1-1.4:
 * - Task 1.1: AST visualization and structure (TemplateLiteral processing)
 * - Task 1.2: Basic transformCssAst() function 
 * - Task 1.3: Identifier node transformations
 * - Task 1.4: CallExpression node transformations (th() functions)
 */

console.log('=== Task 1.5: Comprehensive AST Transformer Test ===')
console.log('')

// Test comprehensive CSS template with multiple node types
const complexTemplateLiteral = {
  type: 'TemplateLiteral',
  quasis: [
    { value: { cooked: '\n  padding: ', raw: '\\n  padding: ' } },
    { value: { cooked: ';\n  color: ', raw: ';\\n  color: ' } },
    { value: { cooked: ';\n  background: ', raw: ';\\n  background: ' } },
    { value: { cooked: ';\n  min-height: calc(100vh - ', raw: ';\\n  min-height: calc(100vh - ' } },
    { value: { cooked: ');\n  \n  ', raw: ');\\n  \\n  ' } },
    { value: { cooked: ' {\n    display: flex;\n  }\n  \n  &:hover {\n    ', raw: ' {\\n    display: flex;\\n  }\\n  \\n  &:hover {\\n    ' } },
    { value: { cooked: '\n  }\n', raw: '\\n  }\\n' } },
  ],
}

const complexExpressions = [
  // Expression 1: th('space.lg') - CallExpression 
  {
    type: 'CallExpression',
    callee: { type: 'Identifier', name: 'th' },
    arguments: [{ type: 'StringLiteral', value: 'space.lg' }],
  },
  // Expression 2: primaryColor - Identifier (variable)
  {
    type: 'Identifier',
    name: 'primaryColor',
  },
  // Expression 3: th('colors.secondary.500') - CallExpression
  {
    type: 'CallExpression',
    callee: { type: 'Identifier', name: 'th' },
    arguments: [{ type: 'StringLiteral', value: 'colors.secondary.500' }],
  },
  // Expression 4: TOPNAV_HEIGHT - Identifier (constant)
  {
    type: 'Identifier',
    name: 'TOPNAV_HEIGHT',
  },
  // Expression 5: OrganizationName - Identifier (component) with CSS block
  {
    type: 'Identifier',
    name: 'OrganizationName',
  },
  // Expression 6: triggerActiveStyles - Identifier (mixin)
  {
    type: 'Identifier',
    name: 'triggerActiveStyles',
  },
]

console.log('Testing comprehensive CSS template with multiple AST node types:')
console.log('')
console.log('Input CSS:')
console.log('css`')
console.log('  padding: ${th(\'space.lg\')};')
console.log('  color: ${primaryColor};')
console.log('  background: ${th(\'colors.secondary.500\')};')
console.log('  min-height: calc(100vh - ${TOPNAV_HEIGHT});')
console.log('  ')
console.log('  ${OrganizationName} {')
console.log('    display: flex;')
console.log('  }')
console.log('  ')
console.log('  &:hover {')
console.log('    ${triggerActiveStyles}')
console.log('  }')
console.log('`')
console.log('')

const result = transformCssAst(complexTemplateLiteral, complexExpressions)

console.log('Output CSS:')
console.log('css`' + result.css + '`')
console.log('')

console.log('Generated Mixins:')
if (result.mixins.size > 0) {
  for (const [mixinName, mixinContent] of result.mixins.entries()) {
    console.log(`@mixin ${mixinName} { ${mixinContent} }`)
  }
} else {
  console.log('No mixins generated')
}
console.log('')

// Validation checks
const validations = [
  {
    name: 'Theme space function transformation',
    check: result.css.includes('var(--spacing-lg)'),
    expected: 'th(\'space.lg\') → var(--spacing-lg)',
  },
  {
    name: 'Variable identifier transformation', 
    check: result.css.includes('/* WUI V9 TO MIGRATE */') && result.css.includes('${primaryColor}'),
    expected: 'primaryColor → migration comment',
  },
  {
    name: 'Theme color function transformation',
    check: result.css.includes('var(--color-secondary-500)'),
    expected: 'th(\'colors.secondary.500\') → var(--color-secondary-500)',
  },
  {
    name: 'Constant identifier transformation',
    check: result.css.includes('${TOPNAV_HEIGHT}'),
    expected: 'TOPNAV_HEIGHT → migration comment',
  },
  {
    name: 'CSS block preservation',
    check: result.css.includes('${OrganizationName} {') && result.css.includes('display: flex;'),
    expected: 'OrganizationName CSS block preserved in comment',
  },
  {
    name: 'Mixin transformation',
    check: result.css.includes('@include trigger-active-styles'),
    expected: 'triggerActiveStyles → @include statement',
  },
]

console.log('Validation Results:')
let allPassed = true
validations.forEach((validation, index) => {
  const status = validation.check ? '✅' : '❌'
  console.log(`${index + 1}. ${status} ${validation.name}`)
  console.log(`   Expected: ${validation.expected}`)
  if (!validation.check) {
    allPassed = false
  }
})

console.log('')
if (allPassed) {
  console.log('🎉 All validations passed! Phase 1 AST Transformer Foundation is complete!')
  console.log('')
  console.log('✅ Task 1.1: TemplateLiteral processing ✓')
  console.log('✅ Task 1.2: Basic transformCssAst() function ✓') 
  console.log('✅ Task 1.3: Identifier transformations ✓')
  console.log('✅ Task 1.4: CallExpression transformations ✓')
  console.log('✅ Task 1.5: Comprehensive testing ✓')
  console.log('')
  console.log('🚀 Ready to proceed to Phase 2: Expression Transformations!')
} else {
  console.log('❌ Some validations failed. Please review the implementation.')
}