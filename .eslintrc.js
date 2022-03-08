const merge = require('lodash.merge')
const shared = require('wttj-config-front/.eslintrc')

const local = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-max-depth': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
      settings: {
        'import/resolve': {
          moduleDirectory: ['node_modules', 'src'],
          extensions: ['.ts', '.tsx'],
        },
      },
    },
  ],
}

module.exports = merge({}, shared, local, (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})
