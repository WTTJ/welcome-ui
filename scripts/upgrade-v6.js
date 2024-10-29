/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// This script will help you to migrate from Welcome-UI v5 to Welcome-UI v6
// node ./scripts/upgrade-v6.js "../your-project/src/**/**.**(ts|tsx)"
const fs = require('fs/promises')

const glob = require('glob')

// const pattern = 'src/**/**.*(ts|tsx)'
const [pattern = ''] = process.argv.slice(2)

const newColorValues = {
  'danger-100': 'v6.danger-10',
  'danger-200': 'v6.danger-20',
  'danger-300': 'v6.danger-30',
  'danger-400': 'v6.danger-40',
  'danger-500': 'v6.danger-50',
  'dark-100': 'v6.neutral-30',
  'dark-200': 'v6.neutral-30',
  'dark-400': 'v6.neutral-50',
  'dark-500': 'v6.neutral-60',
  'dark-700': 'v6.neutral-70',
  'dark-900': 'v6.neutral-90',
  'info-100': 'v6.info-10',
  'info-200': 'v6.info-20',
  'info-300': 'v6.info-30',
  'info-400': 'v6.info-40',
  'info-500': 'v6.info-50',
  'light-100': 'v6.neutral-80',
  'light-200': 'v6.neutral-70',
  'light-400': 'v6.neutral-60',
  'light-500': 'v6.neutral-50',
  'light-700': 'v6.neutral-40',
  'light-900': 'v6.neutral-10',
  'nude-100': 'v6.beige-20',
  'nude-200': 'v6.beige-30',
  'nude-400': 'v6.beige-40',
  'nude-600': 'v6.beige-60',
  'nude-700': 'v6.beige-70',
  'nude-900': 'v6.beige-80',
  'primary-100': 'v6.primary-10',
  'primary-200': 'v6.primary-30',
  'primary-500': 'v6.primary-40',
  'primary-600': 'v6.primary-50',
  'primary-700': 'v6.primary-50',
  'primary-800': 'v6.primary-80',
  'primary-900': 'v6.primary-90',
  'sub-1': 'secondary-blue',
  'sub-2': 'secondary-teal',
  'sub-3': 'secondary-pink',
  'sub-4': 'secondary-orange',
  'sub-5': 'secondary-green',
  'sub-6': 'secondary-green',
  'sub-7': 'secondary-violet',
  'success-100': 'v6.success-10',
  'success-200': 'v6.success-20',
  'success-300': 'v6.success-30',
  'success-400': 'v6.success-40',
  'success-500': 'v6.success-50',
  'warning-100': 'v6.warning-10',
  'warning-200': 'v6.warning-20',
  'warning-300': 'v6.warning-30',
  'warning-400': 'v6.warning-40',
  'warning-500': 'v6.warning-50',
  '"black"': '"neutral-90"',
  '"border"': '"neutral-30"',
  '"underline"': '"primary-40"',
  '"white"': '"neutral-10"',
  "'black'": '"neutral-90"',
  "'border'": '"neutral-30"',
  "'underline'": '"primary-40"',
  "'white'": '"neutral-10"',
}

const getNewColorValue = value => newColorValues[value] || value

const upgradeColors = content => {
  const regex =
    /(primary|nude|success|danger|info|warning|dark|light)-(100|200|300|400|500|600|700|800|900)|(sub-(1|2|3|4|5|6|7)|("black"|"border"|"underline"|"white"|'black'|'border'|'underline'|'white'))/gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, getNewColorValue)
    return newContent
  }
  return content
}

const removePrefix = content => {
  const regex = /v6\./gm

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, prefix => prefix.replace('v6.', ''))
    return newContent
  }

  return content
}

const replaceErrorVariant = content => {
  const regex = /<(Tag|Label|Hint|Alert|Table.Tr)\b([^>]*?)\bvariant\s*=\s*["']error["']/g

  if (regex.test(content)) {
    const newContent = content.replaceAll(regex, '<$1$2variant="danger"')
    return newContent
  }

  return content
}

glob(pattern, (error, matches) => {
  if (error) console.log('error', error)

  matches.forEach(async match => {
    if (
      match === './packages/Core/src/theme/colors.ts' ||
      match === './packages/Core/src/theme/dark.ts'
    )
      return

    const file = await fs.readFile(match)
    let content = file.toString()

    content = upgradeColors(content)
    content = removePrefix(content)
    content = replaceErrorVariant(content)

    await fs.writeFile(match, content)
  })

  console.log('done')
})
