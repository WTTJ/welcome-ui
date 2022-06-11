module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, loose: true }],
    '@babel/preset-typescript',
    '@babel/preset-react',
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
