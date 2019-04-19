import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

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
  'prop-types': 'PropTypes',
  'lodash.merge': 'merge',
  'lodash.get': 'get',
  'lodash.concat': 'concat'
}

const babelOpts = {
  exclude: 'node_modules/**'
}

export default [
  {
    ...base,
    plugins: [terser(), babel(babelOpts)],
    output: {
      globals,
      file: 'dist/umd/welcome-ui.js',
      format: 'umd',
      name: 'JungleUI',
      esModule: false
    }
  },
  {
    ...base,
    plugins: [babel(babelOpts)],
    output: {
      globals,
      file: 'dist/esm/index.js',
      format: 'esm'
    }
  }
]
