import path from 'path'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'

const getBabelOptions = ({ babelConfigFile = '../../babel.config.js', useESModules }) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  configFile: babelConfigFile,
  plugins: [
    'babel-plugin-annotate-pure-calls',
    ['@babel/plugin-transform-runtime', { useESModules }]
  ]
})

const external = id => !id.startsWith('.') && !id.startsWith('/')

export const getRollupConfig = ({ pwd, babelConfigFile }) => {
  const SOURCE_DIR = path.resolve(pwd)
  const pkg = require(`${SOURCE_DIR}/package.json`)
  const input = `${SOURCE_DIR}/index.js`

  const cjsConfig = {
    input,
    output: { file: `${SOURCE_DIR}/${pkg.main}`, format: 'cjs' },
    external,
    plugins: [
      babel(getBabelOptions({ babelConfigFile, useESModules: false })),
      nodeResolve(),
      postcss(),
      json()
    ]
  }

  const esmConfig = {
    input,
    output: { file: `${SOURCE_DIR}/${pkg.module}`, format: 'esm' },
    external,
    plugins: [
      babel(getBabelOptions({ babelConfigFile, useESModules: true })),
      nodeResolve(),
      postcss(),
      json()
    ]
  }

  if (process.env.WATCH_MODE) {
    return [esmConfig, cjsConfig]
  }

  return [esmConfig, cjsConfig]
}
