module.exports = {
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-runtime'],
    },
  },
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'babel-plugin-styled-components',
      { displayName: true, pure: true, ssr: true, transpileTemplateLiterals: true },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    [
      'babel-preset-vite',
      {
        env: true,
        glob: false,
      },
    ],
    '@babel/preset-typescript',
  ],
}
