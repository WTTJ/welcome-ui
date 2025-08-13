import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { components, primitives, semantics } from './constants'

const indentation = '  ' // 2 spaces for indentation
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fontFacesPath = path.join(__dirname, 'fontFaces.css')
const basePath = path.join(__dirname, 'base.css')
const themePath = path.join(__dirname, 'theme.css')

const fontFaces = fs.readFileSync(fontFacesPath, 'utf8')
const baseStyles = fs.readFileSync(basePath, 'utf8')

/**
 * @param {Record<string, string>} map
 * @returns {string}
 * @example @theme { values }
 */
const getStringFrom = (map: Record<string, string>) => `${map.property} {\n${map.value}}\n`

/**
 * @param {Record<string, Record<string, Record<string, string>>>} mappedCSS
 * @returns {string}
 * @example
 *  // ===== COLORS =====
 *
 *   // Beige primitives
 * --color-beige-10: #fbf9f7;
 * --color-beige-20: #f6f3ef;
 */
const getCSSFrom = (mappedCSS: Record<string, Record<string, Record<string, string>>>) => {
  return Object.entries(mappedCSS).reduce((acc, [tokenHierarchy, values]) => {
    return (
      acc +
      Object.entries(values).reduce((acc, [comment, directives]) => {
        /**
         * @example
         * --font-weight-regular: 400;
         * --line-height-h3: 2rem; // 32px
         */
        const directivesString = Object.entries(directives).reduce((acc, [property, value]) => {
          // if value a rem unit
          if (value.endsWith('rem')) {
            // append value in px in a comment
            return (
              acc +
              `${indentation}${property}: ${value}; /* ${(parseFloat(value.replace('rem', '')) || 0) * 16}px */\n`
            )
          }
          return acc + `${indentation}${property}: ${value};\n`
        }, '')

        return acc + `\n${indentation}/* ${comment} */\n${directivesString}`
      }, `\n${indentation}/* ===== ${tokenHierarchy.toUpperCase()} ===== */\n`)
    )
  }, '')
}

const theme = {
  property: '@theme',
  value: getCSSFrom({
    components,
    primitives,
    semantics,
  }),
}

const baseLayer = {
  property: '@layer base',
  value: baseStyles,
}

const generateThemeCss = () =>
  [fontFaces, getStringFrom(theme), getStringFrom(baseLayer)].join('\n')

fs.writeFileSync(themePath, generateThemeCss(), 'utf8')
