const path = require('path')
const fs = require('fs')
const util = require('util')

require('colors')

fs.readFileAsync = util.promisify(fs.readFile)
fs.readdirAsync = util.promisify(fs.readdir)
const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'icons')
const INPUT_PATH = path.join(ICONS_PATH, '_assets')

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
            .then(content => ({ key, content }))
        })
      )
    )
}
