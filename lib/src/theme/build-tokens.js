import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import StyleDictionary from 'style-dictionary'

const pxToRemTypes = ['spacing', 'fontSize', 'borderRadius']

const zeroValueRegex = new RegExp(/(?<!\d)0px(?!\d)/g)

const removeDuplicates = name => {
  const splitName = name.split('-')
  const splitNameWithoutDuplicates = splitName.reduce((acc, match, index) => {
    const indexOfMatch = splitName.indexOf(match)
    const lastIndexOfMatch = splitName.lastIndexOf(match)
    const hasDoubleToDelete =
      indexOfMatch === index &&
      lastIndexOfMatch !== '-1' &&
      lastIndexOfMatch !== indexOfMatch &&
      lastIndexOfMatch - indexOfMatch === 1
    if (hasDoubleToDelete) return acc
    acc.push(match)
    return acc
  }, [])
  return splitNameWithoutDuplicates.join('-')
}

StyleDictionary.registerTransform({
  filter: token => typeof token.value === 'string' && token.value.match(zeroValueRegex),
  name: 'unit/zeroWithoutUnit',
  transform: token => token.value.replaceAll(zeroValueRegex, '0'),
  type: 'value',
})

StyleDictionary.registerTransform({
  filter: token => {
    return (
      typeof token.value === 'string' &&
      token.value.includes('px') &&
      (pxToRemTypes.includes(token.type) ||
        token.name.startsWith('height-') ||
        token.name.startsWith('width-') ||
        token.name.startsWith('size-'))
    )
  },
  name: 'size/pxToRem-custom',
  transform: (token, options) => {
    const baseFontSize = options.basePxFontSize || 16
    const pxValue = parseFloat(token.value)
    return pxValue === 0 ? '0' : `${pxValue / baseFontSize}rem`
  },
  type: 'value',
})

StyleDictionary.registerTransform({
  filter: token => {
    const nameWithoutDuplicates = removeDuplicates(token.name)
    const hasDouble = nameWithoutDuplicates.length !== token.name.length
    return hasDouble
  },
  name: 'name/removeDuplicates',
  transform: token => {
    return removeDuplicates(token.name)
  },
  type: 'name',
})

StyleDictionary.registerTransform({
  filter: token => ['black', 'bold', 'medium', 'regular', 'semi-bold'].includes(token.value),
  name: 'font/weightStringToNumber',
  transform: token =>
    ({ black: '900', bold: '700', medium: '500', regular: '400', 'semi-bold': '600' })[token.value],
  type: 'value',
})

StyleDictionary.registerTransform({
  filter: token => token.name.startsWith('font-family-'),
  name: 'font/familyWithFallback',
  transform: token => {
    const fontFamily = token.name.endsWith('-title') ? 'welcome-font' : token.value
    return `'${fontFamily}', sans-serif`
  },
  type: 'value',
})

StyleDictionary.registerTransform({
  filter: token => token.name === 'border-radius-full',
  name: 'size/radiusToInfinity',
  transform: () => {
    return 'calc(infinity * 1px)'
  },
  type: 'value',
})

StyleDictionary.registerFormat({
  format: function ({ dictionary, options }) {
    const selector = options.selector || ':root'
    let output = `${selector} {\n`
    dictionary.allTokens.forEach(token => {
      // original token
      output += `  --${token.name}: ${token.value};\n`
      // -2xl → -xxl alias
      if (token.name.endsWith('-2xl')) {
        output += `  --${token.name.replace(/-2xl$/, '-xxl')}: ${token.value};\n`
      }
      // -2xs → -xxs alias
      if (token.name.endsWith('-2xs')) {
        output += `  --${token.name.replace(/-2xs$/, '-xxs')}: ${token.value};\n`
      }
      // border-radius → radius- alias
      if (token.name.startsWith('border-radius-')) {
        output += `  --${token.name.replace(/^border-radius-/, 'radius-')}: ${token.value};\n`
      }
      // font-size → text- alias
      if (token.name.startsWith('font-size-')) {
        output += `  --${token.name.replace(/^font-size-/, 'text-')}: ${token.value};\n`
      }
    })
    output += '}'
    return output
  },
  name: 'css/variables-with-alias',
})

const sd = new StyleDictionary({
  platforms: {
    css: {
      basePxFontSize: 16,
      buildPath: path.join(__dirname, './'),
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables-with-alias',
          options: { selector: '@theme static' },
        },
      ],
      transforms: [
        'name/kebab',
        'name/removeDuplicates',
        'unit/zeroWithoutUnit',
        'font/weightStringToNumber',
        'font/familyWithFallback',
        'size/pxToRem-custom',
        'size/radiusToInfinity',
        'color/css',
      ],
    },
  },
  source: [path.join(__dirname, './tokens/*.json')],
})

await sd.buildAllPlatforms()
