/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// This script will help you to migrate from Welcome-UI v4 to Welcome-UI v5
// node ./scripts/upgrade-v5.js "../your-project/src/**/**.**(ts|tsx)"
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
  'dark-100': 'dark-500',
  'dark-200': 'dark-700',
  'dark-500': 'dark-900',
  'dark-700': 'dark-900',
  'dark-800': 'dark-900',
  'light-800': 'dark-100',
  'light-700': 'dark-200',
  'light-500': 'dark-400',
  'light-200': 'dark-400',
  'light-100': 'dark-500',
}

const newTextValues = {
  body1: 'lg',
  body2: 'md',
  body3: 'sm',
  body4: 'xs',
  subtitle1: 'subtitle-md',
  subtitle2: 'subtitle-sm',
  meta1: 'sm',
  meta2: 'xs',
}

const getNewSpacingValue = value => newSpacingValues[value] || value
const getNewColorValue = value => newColorValues[value] || value
const getNewTextValue = value => newTextValues[value] || value
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

const upgradeColorsKey = content => {
  const regex = /(primary|light|dark|nude|success|danger|info|warning|sub)\.(1|2|3|4|5|6|7|8|9)/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, color => color.replace('.', '-'))
    return newContent
  }

  return content
}

const upgradeJsxSpacing = content => {
  const regex =
    /(mt|mb|my|mr|ml|mx|pt|pb|py|pr|pl|px|paddingTop|paddingBottom|paddingRight|paddingLeft|marginTop|marginBottom|marginRight|marginLeft|gap)="(xs|xxl|3xl|5xl|6xl)"/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, cleanJsxSpacingValue)
    return newContent
  }

  return content
}

const upgradeStyledSpacing = content => {
  const regex =
    /(padding|padding-top|padding-bottom|padding-right|padding-left|margin|margin-top|margin-bottom|margin-right|margin-left):( )(xs|xxl|3xl|5xl|6xl);/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, cleanStyledSpacingValue)
    return newContent
  }

  return content
}

const upgradeColors = content => {
  const regex =
    /(nude|success|danger|info|warning|dark|light)-(100|200|300|400|500|600|700|800|900)/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, getNewColorValue)
    return newContent
  }
  return content
}

const upgradeTexts = content => {
  const regex = /body1|body2|body3|body4|subtitle1|subtitle2|meta1|meta2/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, getNewTextValue)
    return newContent
  }
  return content
}

const removePrefix = content => {
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

    content = upgradeColorsKey(content)
    content = upgradeColors(content)
    content = upgradeJsxSpacing(content)
    content = upgradeStyledSpacing(content)
    content = upgradeTexts(content)
    content = removePrefix(content)

    await fs.writeFile(match, content)
  })

  console.log('done')
})
