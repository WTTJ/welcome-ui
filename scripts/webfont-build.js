/* eslint-disable no-console */
const path = require('path')
const fs = require('fs')
const util = require('util')

const argv = require('yargs').argv
const difference = require('lodash.difference')
const webfontsGenerator = require('webfonts-generator')
require('colors')

const { FLAG_ICONS, readIconsFromAssets } = require('./utils')

fs.readdirAsync = util.promisify(fs.readdir)

const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'icons')
const INPUT_PATH = path.join(ICONS_PATH, '_assets')
const ICON_FONT_PATH = path.join(ROOT_PATH, 'packages/IconFont')

// Write icon font
const writeIconFont = files => {
  console.log('Started'.blue, 'Writing icon font'.grey)
  const filteredFiles = files.filter(file => !FLAG_ICONS.includes(file.key))
  const unicodeFile = `${ICON_FONT_PATH}/unicode.json`
  const unicodeMap = require(unicodeFile)
  const newIcons = difference(filteredFiles.map(file => file.key), Object.keys(unicodeMap))

  if (!newIcons.length && !argv.force) {
    console.log('Success'.yellow, 'No new icons to write to icon font')
    return files
  } else if (newIcons.length) {
    console.log('Adding'.yellow, newIcons.join(', '))
  }

  // Add new icons to unicodeMap (adding one to hex value for each new icon)
  const newUnicodeMap = newIcons.reduce((arr, key) => {
    const lastUnicodeEntry = arr[Object.keys(unicodeMap).pop()]
    const newUnicodeEntry = (parseInt(lastUnicodeEntry, 16) + 1).toString(16).toUpperCase()
    arr[key] = `0x${newUnicodeEntry}`
    return arr
  }, unicodeMap)

  // Write the updated unicode map
  const fileContent = `${JSON.stringify(newUnicodeMap, 0, 2)}
`
  fs.writeFileSync(unicodeFile, fileContent)

  // Generate web fonts
  webfontsGenerator(
    {
      files: filteredFiles.map(file => `${INPUT_PATH}/${file.key}.svg`),
      dest: `${ICON_FONT_PATH}/fonts`,
      fontName: 'welcome-icon-font',
      codepoints: newUnicodeMap,
      types: ['woff', 'woff2'],
      // Pass timestamp so that hash doesn't change between (non-changing) builds
      formatOptions: { ttf: { ts: 0 } }
    },
    error => {
      if (error) {
        console.error('Fail!', error)
      } else {
        console.log('Success'.green, 'Writing icon font')
      }
    }
  )

  return files
}

// Main function: Read icons from folder and update all icon (packages)
readIconsFromAssets()
  .then(writeIconFont)
  .catch(err => {
    throw err
  })
