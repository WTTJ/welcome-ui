import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { primitives, semantics } from './tokens'

const indentation = '  ' // 2 spaces for indentation
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fontFacesPath = path.join(__dirname, 'fontFaces.css')
const basePath = path.join(__dirname, 'base.css')
const resetPath = path.join(__dirname, 'resets.css')
const themePath = path.join(__dirname, 'theme.css')
const breakpointsPath = path.join(__dirname, 'utils', 'breakpoints.scss')

const fontFaces = fs.readFileSync(fontFacesPath, 'utf8')
const baseStyles = fs.readFileSync(basePath, 'utf8')
const resetStyles = fs.readFileSync(resetPath, 'utf8')

/**
 * @param {Record<string, string>} map
 * @returns {string}
 * @example @theme { values }
 */
const getStringFrom = (map: Record<string, string>) => `${map.property} {\n${map.value}}\n`

/**
 * @param {Record<string, Record<string, Record<string, string>>>} tokenHierarchies
 * @returns {string}
 * @example
 *  // ===== COLORS =====
 *
 *   // Beige primitives
 * --color-beige-10: #fbf9f7;
 * --color-beige-20: #f6f3ef;
 */
const getCSSFrom = (tokenHierarchies: Record<string, Record<string, Record<string, string>>>) => {
  return Object.entries(tokenHierarchies).reduce((acc, [tokenHierarchy, tokenFamilies]) => {
    return (
      acc +
      Object.entries(tokenFamilies).reduce((acc, [comment, tokens]) => {
        /**
         * @example
         * --font-weight-regular: 400;
         * --line-height-h3: 2rem; // 32px
         */
        const tokenStrings = Object.entries(tokens).reduce((acc, [token, value]) => {
          const tokenString = `${indentation}${token}: ${value};`
          // if value a rem unit
          if (value.endsWith('rem')) {
            // append value in px in a comment
            return (
              acc + `${tokenString} /* ${(parseFloat(value.replace('rem', '')) || 0) * 16}px */\n`
            )
          }
          return acc + `${tokenString}\n`
        }, '')

        return acc + `\n${indentation}/* ${comment} */\n${tokenStrings}`
      }, `\n${indentation}/* ===== ${tokenHierarchy.toUpperCase()} ===== */\n`)
    )
  }, '')
}

const resetTailwindTokens = `${indentation}--*: initial;\n`

const theme = {
  property: '@theme',
  value: `${resetTailwindTokens} ${getCSSFrom({ primitives, semantics })}`,
}

const baseLayer = { property: '@layer base', value: `${resetStyles}\n${baseStyles}` }

const generateThemeCss = () =>
  [fontFaces, getStringFrom(theme), getStringFrom(baseLayer)].join('\n')

// Generate main theme.css file
fs.writeFileSync(themePath, generateThemeCss(), 'utf8')

// Generate scss breakpoints file
const breakpointsContent = Object.entries(primitives.screens).reduce((acc, [key, value]) => {
  return acc + `${key.replace('--', '$')}: ${value};\n`
}, '/* screens - auto-generated from token.ts - do not edit directly */\n')

fs.writeFileSync(breakpointsPath, breakpointsContent, 'utf8')
