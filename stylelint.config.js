module.exports = {
  extends: './node_modules/wttj-config/lib/stylelint',
  rules: {
    'selector-type-no-unknown': [true, { ignoreTypes: ['/-styled-mixin/', '$dummyValue'] }],
  },
}
