/* eslint-disable no-console */

import { exec } from 'child_process'
import path from 'path'
import fs from 'fs'
import util from 'util'

import { rollup } from 'rollup'
import 'colors'

import { getRollupConfig } from '../rollup.config.js'

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)

const rootPath = path.join(__dirname, '..')
const iconsPath = path.join(rootPath, 'icons')

const IGNORE_DIRS = ['_assets', 'dist', 'node_modules']

// Read icons/assets/*.svg
const readIconsFromFolders = () => {
  console.log(`Building individual icons…`.grey)
  return fs.readdirAsync(iconsPath).then(keys => {
    keys.forEach(key => {
      const isDirectory = fs.lstatSync(`${iconsPath}/${key}`).isDirectory()
      if (!isDirectory || IGNORE_DIRS.includes(key)) {
        return
      }

      const pwd = `${iconsPath}/${key}`
      const configs = getRollupConfig({ babelConfigFile: './babel.config.js', pwd })

      configs.forEach(config => {
        const { output: outputOptions, ...inputOptions } = config
        exec(`cd ${pwd}`)
        rollup({ ...inputOptions })
          .then(bundle => bundle.write(outputOptions))
          .then(() => console.log(`✔ ${key} (${outputOptions.format}) built`.green))
          // .then(output => console.debug(output))
          .catch(console.error)
      })
    })
  })
}

readIconsFromFolders()
