module.exports = {
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-runtime'],
    },
  },
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
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'styled-components',
      { ssr: true, displayName: true, pure: true, transpileTemplateLiterals: true },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}
