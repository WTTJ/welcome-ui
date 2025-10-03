export default {
  extends: ['stylelint-config-recommended'],
  overrides: [
    {
      files: ['**/*.{css,scss}'],
      rules: {
        'at-rule-no-deprecated': null,
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['apply', 'theme', 'mixin', 'source', 'use', 'include'],
          },
        ],
        'media-query-no-invalid': [null],
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
    {
      extends: ['stylelint-config-standard'],
      files: ['**/*.{ts,tsx}'],
      rules: {
        'declaration-property-value-no-unknown': null,
        'media-feature-name-value-no-unknown': null,
        'no-empty-source': null,
      },
    },
  ],
}
