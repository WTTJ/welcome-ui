import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'jungle-ui',
      esModule: false
    },
    external: ['styled-components', /lodash\.[\w]+/]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'es/index.js',
      format: 'esm'
    },
    external: ['styled-components', /lodash\.[\w]+/]
  }
]
