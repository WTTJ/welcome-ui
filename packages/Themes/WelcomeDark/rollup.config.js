import { getRollupConfig } from '../../../rollup.config.js'

export default getRollupConfig({
  babelConfigFile: '../../../babel.config.js',
  pwd: __dirname,
  ts: true,
  inputFile: 'index.ts',
})
