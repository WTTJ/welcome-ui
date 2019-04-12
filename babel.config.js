module.exports = {
  env: {
    commonjs: {
      plugins: [['transform-es2015-modules-commonjs', { loose: true }]]
    },
    test: {
      plugins: ['transform-es2015-modules-commonjs']
    }
  },
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
}
