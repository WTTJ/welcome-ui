module.exports = {
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-runtime']
    }
  },
  presets: [['@babel/preset-env', { modules: false, loose: true }], '@babel/preset-react'],
  plugins: [
    [
      'styled-components',
      { ssr: true, displayName: true, pure: true, transpileTemplateLiterals: true }
    ],
    ['transform-react-remove-prop-types', { removeImport: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ],
  overrides: [
    {
      test: /styles.js$/,
      presets: ['@babel/preset-react']
    }
  ]
}
