import path from 'path'

import babel from 'rollup-plugin-babel'
import replace from '@rollup/plugin-replace'
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

const PLUGINS = [
  replace({
    __BRANCH__: process.env.BRANCH || 'dev',
    __ICON_FONT_HASH__: process.env.ICON_FONT_HASH
  }),
  nodeResolve(),
  postcss(),
  json()
]

export const getRollupConfig = ({ babelConfigFile, pwd }) => {
  const SOURCE_DIR = path.resolve(pwd)
  const pkg = require(`${SOURCE_DIR}/package.json`)
  const input = `${SOURCE_DIR}/index.js`

  const cjsConfig = {
    input,
    output: { file: `${SOURCE_DIR}/${pkg.main}`, format: 'cjs' },
    external,
    plugins: [...PLUGINS, babel(getBabelOptions({ babelConfigFile, useESModules: false }))]
  }

  const esmConfig = {
    input,
    output: { file: `${SOURCE_DIR}/${pkg.module}`, format: 'esm' },
    external,
    plugins: [...PLUGINS, babel(getBabelOptions({ babelConfigFile, useESModules: true }))]
  }

  if (process.env.WATCH_MODE) {
    return [esmConfig, cjsConfig]
  }

  return [esmConfig, cjsConfig]
}
