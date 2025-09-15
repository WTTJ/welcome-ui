export default {
  extends: ['stylelint-config-recommended'],
  overrides: [
    {
      files: ['**/src/components/**/*.{css,scss}', '**/src/theme/**/*.{css,scss}'],
      rules: {
        'at-rule-no-deprecated': null,
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['apply', 'theme'],
          },
        ],
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
    {
      customSyntax: 'postcss-styled-syntax',
      files: ['**/*.{ts,tsx}'],
      rules: {
        'declaration-property-value-no-unknown': null,
        'media-feature-name-value-no-unknown': null,
        'no-empty-source': null,
      },
    },
  ],
}
