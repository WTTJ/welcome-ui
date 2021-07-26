const merge = require('lodash.merge')
const shared = require('wttj-config-front/.eslintrc')

const local = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  ]
}

module.exports = merge({}, shared, local)
