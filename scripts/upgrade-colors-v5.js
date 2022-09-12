/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This script is usefull to upgrade Welcome-UI v4 to v5
 * Indeed, keys of theme.colors has changed, by replacing "." with "-"
 * e.g.: "primary.500" -> "primary-500"
 */
const fs = require('fs/promises')

const glob = require('glob')

const regex = /(primary|light|dark|nude|success|danger|info|warning|sub)\.(=)*/gi

// every files in src folder with ts or tsx extension
const pattern = 'src/**/**.*(ts|tsx)'

glob(pattern, (error, matches) => {
  if (error) console.log('error', error)

  matches.forEach(async match => {
    const file = await fs.readFile(match)
    const content = file.toString()

    if (regex.test(content)) {
      const newContent = content.replaceAll(regex, color => color.replace('.', '-'))
      await fs.writeFile(match, newContent)
    }
  })
})
