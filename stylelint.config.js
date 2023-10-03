module.exports = {
  extends: './node_modules/wttj-config/lib/stylelint',
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'selector-type-no-unknown': [true, { ignoreTypes: ['/-styled-mixin/', '$dummyValue'] }],
  },
}
