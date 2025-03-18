/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')
const util = require('util')

require('colors')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)

const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'lib/src/components/Icons')
const INPUT_PATH = path.join(ICONS_PATH, '_assets')

export const FLAG_ICONS = ['flag_cs', 'flag_en', 'flag_es', 'flag_fr', 'flag_sk']

// Read icons/assets/*.svg
export const readIconsFromAssets = () => {
  return fs
    .readdirAsync(INPUT_PATH)
    .then(files =>
      files.filter(file => {
        const [, type] = file.split('.')
        return type === 'svg'
      })
    )
    .then(files =>
      Promise.all(
        files.map(file => {
          const [key] = file.split('.')
          return fs
            .readFileAsync(path.join(INPUT_PATH, file), 'utf8')
            .then(content => ({ content, key }))
        })
      )
    )
}
