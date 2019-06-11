import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'

const base = {
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    'prop-types',
    'styled-components',
    'lodash.merge',
    'lodash.get',
    'lodash.concat'
  ]
}

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router-dom': 'ReactRouterDOM',
  'styled-components': 'styled',
  'lodash.merge': 'merge',
  'lodash.get': 'get',
  'lodash.concat': 'concat'
}

const plugins = [babel({ exclude: 'node_modules/**' }), resolve(), commonjs(), postcss()]

export default [
  {
    ...base,
    plugins: [terser(), ...plugins],
    output: {
      globals,
      file: 'dist/cjs/welcome-ui.js',
      format: 'cjs',
      name: 'JungleUI',
      esModule: false
    }
  },
  {
    ...base,
    plugins,
    output: {
      globals,
      file: 'dist/esm/index.js',
      format: 'esm'
    }
  }
]
