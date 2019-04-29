module.exports = {
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  },
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: false
      }
    ],
    '@babel/plugin-proposal-class-properties'
  ]
}
