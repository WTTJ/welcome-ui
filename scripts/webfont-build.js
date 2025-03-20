/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')
const util = require('util')

const argv = require('yargs').argv
const webfontsGenerator = require('@vusion/webfonts-generator')
const difference = require('lodash.difference')
require('colors')

const { FLAG_ICONS, readIconsFromAssets } = require('./utils')

fs.readdirAsync = util.promisify(fs.readdir)

const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'lib/src/components/Icons')
const INPUT_PATH = path.join(ICONS_PATH, '_assets')
const ICON_FONT_PATH = path.join(ROOT_PATH, 'lib/src/components/IconsFont')
const FONT_NAME = 'welcome-icon-font'

// Write icon font
const writeIconsFont = files => {
  console.log('Started'.blue, 'Writing icon font'.grey)
  const filteredFiles = files.filter(file => !FLAG_ICONS.includes(file.key))
  const unicodeFile = `${ICON_FONT_PATH}/unicode.json`
  const unicodeMap = require(unicodeFile)
  const newIcons = difference(
    filteredFiles.map(file => file.key),
    Object.keys(unicodeMap)
  )

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
  const fileContent = `${JSON.stringify(newUnicodeMap, 0, 2)}`
  fs.writeFileSync(unicodeFile, fileContent)

  // Generate web fonts
  webfontsGenerator(
    {
      codepoints: newUnicodeMap,
      dest: `${ICON_FONT_PATH}/fonts`,
      files: filteredFiles.map(file => `${INPUT_PATH}/${file.key}.svg`),
      fontName: FONT_NAME,
      templateOptions: {
        baseSelector: 'i',
        classPrefix: 'wui-icon-',
      },
      types: ['woff', 'woff2'],
    },
    error => {
      if (error) {
        console.error('Fail!', error)
      } else {
        console.log('Success'.green, 'Writing icon font')
      }
      const cssFilePath = `${ICON_FONT_PATH}/fonts/${FONT_NAME}.css`
      fs.readFile(cssFilePath, 'utf8', function (err, data) {
        if (err) {
          return console.log(err)
        }
        var result = data.replace(/content: "\\0x([^"]+)"/g, 'content: "\\$1"')

        fs.writeFile(cssFilePath, result, 'utf8', function (err) {
          if (err) return console.log(err)
        })
      })
    }
  )

  return files
}

// Main function: Read icons from folder and update all icon (packages)
readIconsFromAssets()
  .then(writeIconsFont)
  .catch(err => {
    throw err
  })
