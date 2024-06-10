/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// This script will help you to migrate to our new radii values
// node ./scripts/upgrade-radii.js "../YOUR_PROJECT/src/**/**.{ts,tsx}"
const fs = require('fs/promises')

const glob = require('glob')

// const pattern = 'src/**/**.*(ts|tsx)'
const [pattern = ''] = process.argv.slice(2)

const newRadiiValues = {
  2: 'sm',
  '2px': 'sm',
  4: 'md',
  '4px': 'md',
  8: 'lg',
  '8px': 'lg',
  16: 'xl',
  '16px': 'xl',
}

const getNewRadiiValue = value => newRadiiValues[value] || value
const removeQuotes = value => value.replaceAll('{', '').replaceAll('}', '').replaceAll('"', '')
const removeSemicolon = value => value.replace(';', '')

const cleanJsxRadiiValue = prop => {
  const [key, value] = prop.split('=')
  const newValue = getNewRadiiValue(removeQuotes(value))

  return `${key}="${newValue}"`
}

const cleanStyledRadiiValue = prop => {
  const [key, value] = prop.split(':')
  const newValue = getNewRadiiValue(removeSemicolon(value).trim())

  return `${key}: ${newValue};`
}

const upgradeJsxRadii = content => {
  const regex = /borderRadius=(\{(2|4|8|16)}|"(2px|4px|8px|16px)")/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, cleanJsxRadiiValue)
    return newContent
  }

  return content
}

const upgradeStyledRadii = content => {
  const regex = /(border-radius):( )(2|4|8|16|2px|4px|8px|16px);/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, cleanStyledRadiiValue)
    return newContent
  }

  return content
}

glob(pattern, (error, matches) => {
  if (error) console.log('error', error)

  matches.forEach(async match => {
    const file = await fs.readFile(match)
    let content = file.toString()

    content = upgradeStyledRadii(content)
    content = upgradeJsxRadii(content)

    await fs.writeFile(match, content)
  })

  console.log('done')
})
