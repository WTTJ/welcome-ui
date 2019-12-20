import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import path from 'path'

const PACKAGE_ROOT_PATH = process.cwd()
const pkg = require(`${PACKAGE_ROOT_PATH}/package.json`)

const input = 'index.js'
const external = id => !id.startsWith('.') && !id.startsWith('/')

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  configFile: `${process.env.PROJECT_ROOT}/babel.config.js` || '../../babel.config.js',
  plugins: [
    'babel-plugin-annotate-pure-calls',
    ['@babel/plugin-transform-runtime', { useESModules }]
  ]
})

const cjsConfig = {
  input,
  output: { file: pkg.main, format: 'cjs' },
  external,
  plugins: [
    babel(getBabelOptions({ useESModules: false })),
    nodeResolve(),
    postcss(),
    sizeSnapshot()
  ]
}

const esmConfig = {
  input,
  output: { file: pkg.module, format: 'esm' },
  external,
  plugins: [
    babel(getBabelOptions({ useESModules: true })),
    nodeResolve(),
    postcss(),
    sizeSnapshot()
  ]
}

export default [cjsConfig, esmConfig]
