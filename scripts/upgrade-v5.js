/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// This script will help you to migrate from Welcome-UI v4 to Welcome-UI v5
// node ./scripts/upgrade-v5.js '../your-projets/src/**/**.**(ts|tsx)'
const fs = require('fs/promises')

const glob = require('glob')

// const pattern = 'src/**/**.*(ts|tsx)'
const [pattern = ''] = process.argv.slice(2)

const newSpacingValues = {
  xs: 'sm',
  xxl: 'xl',
  '3xl': 'xxl',
  '5xl': '3xl',
  '6xl': '4xl',
}

const newColorValues = {
  'success-500': 'success-300',
  'danger-500': 'danger-300',
  'warning-500': 'warning-300',
  'info-500': 'info-300',
  'success-700': 'success-400',
  'danger-700': 'danger-400',
  'warning-700': 'warning-400',
  'info-700': 'info-400',
  'nude-400': 'nude-500',
  'nude-500': 'nude-400',
  'nude-700': 'nude-600',
  'nude-800': 'nude-700',
}

const getNewSpacingValue = value => newSpacingValues[value] || value
const getNewColorValue = value => newColorValues[value] || value
const removeQuotes = value => value.replaceAll('"', '')
const removeSemicolon = value => value.replace(';', '')

const cleanJsxSpacingValue = prop => {
  const [key, value] = prop.split('=')
  const newValue = getNewSpacingValue(removeQuotes(value))

  return `${key}="v5.${newValue}"`
}

const cleanStyledSpacingValue = prop => {
  const [key, value] = prop.split(':')
  const newValue = getNewSpacingValue(removeSemicolon(value).trim())

  return `${key}: v5.${newValue};`
}

const upgradeColorsKey = async content => {
  const regex = /(primary|light|dark|nude|success|danger|info|warning|sub)\.(1|2|3|4|5|6|7|8|9)/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, color => color.replace('.', '-'))
    return newContent
  }

  return content
}

const upgradeJsxSpacing = async content => {
  const regex =
    /(mt|mb|my|mr|ml|mx|pt|pb|py|pr|pl|px|paddingTop|paddingBottom|paddingRight|paddingLeft|marginTop|marginBottom|marginRight|marginLeft)="(xs|xxl|3xl|5xl|6xl)"/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, cleanJsxSpacingValue)
    return newContent
  }

  return content
}

const upgradeStyledSpacing = async content => {
  const regex =
    /(padding|padding-top|padding-bottom|padding-right|padding-left|margin|margin-top|margin-bottom|margin-right|margin-left):( )(xs|xxl|3xl|5xl|6xl);/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, cleanStyledSpacingValue)
    return newContent
  }

  return content
}

const upgradeColors = async content => {
  const regex = /(nude|success|danger|info|warning)-(100|200|300|400|500|600|700|800|900)/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, getNewColorValue)
    return newContent
  }
  return content
}

const removePrefix = async content => {
  const regex = /v5\./gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, prefix => prefix.replace('v5.', ''))
    return newContent
  }

  return content
}

glob(pattern, (error, matches) => {
  if (error) console.log('error', error)

  matches.forEach(async match => {
    const file = await fs.readFile(match)
    let content = file.toString()

    content = await upgradeColorsKey(content)
    content = await upgradeColors(content)
    content = await upgradeJsxSpacing(content)
    content = await upgradeStyledSpacing(content)
    content = await removePrefix(content)

    await fs.writeFile(match, content)
  })

  console.log('done')
})
