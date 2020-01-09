const config = require('wttj-config-front/.eslintrc')

module.exports = {
  ...config,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    ...config.rules,
    'react/prop-types': 'off'
  }
}
