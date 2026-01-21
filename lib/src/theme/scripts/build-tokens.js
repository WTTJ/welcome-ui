import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import StyleDictionary from 'style-dictionary'

// This is the list of token name prefixes that should be transformed to rem
const transformToRem = ['height-', 'width-', 'size-', 'font-', 'spacing-', 'border-radius-']

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

// This parser removes the $extensions property from tokens
// only to avoid Style Dictionary warnings on token collisions
StyleDictionary.registerParser({
  name: 'figma-alias-parser',
  parser: ({ contents }) => {
    const tokens = JSON.parse(contents)

    const transform = token => {
      if (typeof token !== 'object' || token === null) return token

      return Object.fromEntries(
        Object.entries(token)
          .filter(([key]) => key !== '$extensions')
          .map(([key, value]) => [key, transform(value)])
      )
    }

    return transform(tokens)
  },
  pattern: /\.json$/,
})

// This preprocessor transforms tokens which values are referring to primitive tokens
// into Style Dictionary alias format
StyleDictionary.registerPreprocessor({
  name: 'figma-alias-preprocessor',
  preprocessor: dictionary => {
    const transform = token => {
      if (typeof token !== 'object' || token === null) return token

      const path = token?.$extensions?.['com.figma.aliasData']?.targetVariableName
      if (path) {
        const parsedPath = path.replace(/\//g, '.')
        return { ...token, $value: `{${parsedPath}}` }
      }

      const transformed = Object.fromEntries(
        Object.entries(token)
          .filter(([key]) => key !== '$extensions')
          .map(([key, value]) => [key, transform(value)])
      )

      return transformed
    }

    return transform(dictionary)
  },
})

StyleDictionary.registerTransform({
  filter: token => {
    return token.$type === 'color' && typeof token.$value === 'object' && 'hex' in token.$value
  },
  name: 'figma/color/hex',
  transform: token => {
    const colorObject = token.$value

    const hasAlpha = colorObject.alpha !== undefined && colorObject.alpha < 1
    const { alpha, hex } = colorObject
    const hexValue = hex.replace('#', '')

    if (hasAlpha) {
      const r = parseInt(hexValue.substring(0, 2), 16)
      const g = parseInt(hexValue.substring(2, 4), 16)
      const b = parseInt(hexValue.substring(4, 6), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    return hex
  },
  type: 'value',
})

StyleDictionary.registerTransform({
  filter: token => typeof token.$value === 'string' && token.$value.match(zeroValueRegex),
  name: 'unit/zeroWithoutUnit',
  transform: token => token.$value.replaceAll(zeroValueRegex, '0'),
  type: 'value',
})

StyleDictionary.registerTransform({
  filter: token => {
    return token['$type'] === 'number' && !token?.$extensions?.['com.figma.aliasData']
  },
  name: 'size/numberToPxOrRem',
  transform: (token, options) => {
    const baseFontSize = options.basePxFontSize || 16
    const value = token.$value

    if (value === 0) return '0'

    if (transformToRem.some(name => token.name.startsWith(name))) {
      return `${value / baseFontSize}rem`
    }
    return `${value}px`
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
  filter: token => ['black', 'bold', 'medium', 'regular', 'semi-bold'].includes(token.$value),
  name: 'font/weightStringToNumber',
  transform: token =>
    ({ black: '900', bold: '700', medium: '500', regular: '400', 'semi-bold': '600' })[
      token.$value
    ],
  type: 'value',
})

StyleDictionary.registerTransform({
  filter: token => token.name.startsWith('font-family-'),
  name: 'font/familyWithFallback',
  transform: token => {
    const fontFamily = token.name.endsWith('-title') ? 'welcome-font' : token.$value
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
      output += `  --${token.name}: ${token.$value};\n`
      // -2xl → -xxl alias
      if (token.name.endsWith('-2xl')) {
        output += `  --${token.name.replace(/-2xl$/, '-xxl')}: ${token.$value};\n`
      }
      // -2xs → -xxs alias
      if (token.name.endsWith('-2xs')) {
        output += `  --${token.name.replace(/-2xs$/, '-xxs')}: ${token.$value};\n`
      }
      // border-radius → radius- alias
      if (token.name.startsWith('border-radius-')) {
        output += `  --${token.name.replace(/^border-radius-/, 'radius-')}: ${token.$value};\n`
      }
      // font-size → text- alias
      if (token.name.startsWith('font-size-')) {
        output += `  --${token.name.replace(/^font-size-/, 'text-')}: ${token.$value};\n`
      }
    })
    output += '}'
    return output
  },
  name: 'css/variables-with-alias',
})

const sd = new StyleDictionary({
  log: { verbosity: 'verbose' },
  parsers: ['figma-alias-parser'],
  platforms: {
    css: {
      basePxFontSize: 16,
      buildPath: path.join(__dirname, '../generated/'),
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables-with-alias',
          options: { selector: '@theme static' },
        },
      ],
      source: [path.join(__dirname, '../tokens/*.json')],
      transforms: [
        'figma/color/hex',
        'name/kebab',
        'name/removeDuplicates',
        'unit/zeroWithoutUnit',
        'font/weightStringToNumber',
        'font/familyWithFallback',
        'size/numberToPxOrRem',
        'size/radiusToInfinity',
        'color/css',
      ],
    },
  },
  preprocessors: ['figma-alias-preprocessor'],
  source: [path.join(__dirname, '../tokens/*.json')],
})

await sd.buildAllPlatforms()
