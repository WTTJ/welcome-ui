import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import StyleDictionary from 'style-dictionary'

const pxToRemTypes = ['spacing', 'fontSize', 'borderRadius']

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

const sd = new StyleDictionary({
  platforms: {
    css: {
      basePxFontSize: 16,
      buildPath: path.join(__dirname, './'),
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { selector: '@theme static' },
        },
      ],
      transforms: [
        'name/kebab',
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
