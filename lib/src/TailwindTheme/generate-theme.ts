import fs from 'fs'

import { components, primitives, semantics } from './constants'

/**
 * @param {Record<string, string>} map
 * @returns {string}
 * @example @theme { values }
 */
const getStringFrom = (map: Record<string, string>) => `${map.property} {${map.value}}`

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
              `${property}: ${value}; /* ${(parseFloat(value.replace('rem', '')) || 0) * 16}px */ \n`
            )
          }
          return acc + `${property}: ${value};\n`
        }, '')

        return acc + `\n/* ${comment} */\n${directivesString} `
      }, `\n/* ===== ${tokenHierarchy.toUpperCase()} ===== */\n`)
    )
  }, '')
}

const fontFaces = fs.readFileSync('./fontFaces.css', 'utf8')
const baseStyles = fs.readFileSync('./base.css', 'utf8')

const theme = {
  property: '@theme',
  value: getCSSFrom({
    components,
    primitives,
    semantics,
  }),
}

const layer = {
  property: '@layer base',
  value: baseStyles,
}

const generateThemeCss = () => `${fontFaces}
${getStringFrom(theme)}
${getStringFrom(layer)}`

fs.writeFileSync('./theme.css', generateThemeCss(), 'utf8')
