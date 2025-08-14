export default {
  extends: ['stylelint-config-recommended'],
  overrides: [
    {
      files: ['**/src/Tailwind**/**/*.css'],
      plugins: ['./stylelint-apply-one-class-per-line.js'],
      rules: {
        'at-rule-no-deprecated': null,
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['apply', 'theme'],
          },
        ],
        'custom/apply-one-class-per-line': true,
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
