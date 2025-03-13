module.exports = {
  extends: './node_modules/wttj-config/lib/eslint/eslintrc-typescript',
  overrides: [
    {
      files: ['src/**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:@vitest/legacy-recommended'],
    },
  ],
}
