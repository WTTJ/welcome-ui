import { getRollupConfig } from '../rollup.config.js'

export default getRollupConfig({ babelConfigFile: '../babel.config.js', pwd: __dirname })
