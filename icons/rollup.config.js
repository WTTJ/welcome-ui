import { getRollupConfig } from '../rollup.config.js'

export default getRollupConfig({
  pwd: __dirname,
  babelConfigFile: '../babel.config.js',
  ts: true,
  inputFile: 'index.ts',
})
