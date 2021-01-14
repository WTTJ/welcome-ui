/* eslint-disable no-console */

import { exec } from 'child_process'
import path from 'path'
import fs from 'fs'
import util from 'util'

import { rollup } from 'rollup'
import 'colors'

import { getRollupConfig } from '../rollup.config.js'
import { toKebabCase } from '../utils/strings'

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)

const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'icons')

const IGNORE_DIRS = ['_assets', 'dist', 'node_modules']

// Read icons/assets/*.svg
const readIconsFromFolders = () => {
  console.log(`Building individual icons…`.grey)
  return fs.readdirAsync(ICONS_PATH).then(keys => {
    keys.forEach(key => {
      const isDirectory = fs.lstatSync(`${ICONS_PATH}/${key}`).isDirectory()
      if (!isDirectory || IGNORE_DIRS.includes(key)) {
        return
      }

      const pwd = `${ICONS_PATH}/${key}`
      const configs = getRollupConfig({ babelConfigFile: './babel.config.js', pwd })
      const packageName = toKebabCase(key)

      configs.forEach(config => {
        const { output: outputOptions, ...inputOptions } = config
        exec(`cd ${pwd}`)
        rollup({ ...inputOptions })
          .then(bundle => bundle.write(outputOptions))
          .then(() =>
            console.log(
              'build',
              'success'.green.bold,
              '-',
              `@welcome-ui/icons.${packageName}.${outputOptions.format}`
            )
          )
          // .then(output => console.debug(output))
          .catch(console.error)
      })
    })
  })
}

readIconsFromFolders()
