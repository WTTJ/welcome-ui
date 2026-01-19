import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { themeVariables } from '../generated/variables'

const breakpoints = Object.entries(themeVariables).reduce<Record<string, string>>(
  (acc, [key, value]) => {
    if (key.startsWith('--breakpoint-')) {
      const size = key.replace('--breakpoint-', '')
      acc[size] = value
    }
    return acc
  },
  {}
)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fontFacesPath = path.join(__dirname, '../layers/fontFaces.css')
const basePath = path.join(__dirname, '../layers/base.css')
const utilitiesPath = path.join(__dirname, '../layers/utilities.css')
const resetPath = path.join(__dirname, '../layers/resets.css')
const techTokensPath = path.join(__dirname, '../layers/techTokens.css')

const themePath = path.join(__dirname, '../generated/theme.css')
const variablesPath = path.join(__dirname, '../generated/variables.css')

const breakpointsPath = path.join(__dirname, '../../utils/scss/breakpoints.scss')

const fontFaces = fs.readFileSync(fontFacesPath, 'utf8')
const baseStyles = fs.readFileSync(basePath, 'utf8')
const techTokens = fs.readFileSync(techTokensPath, 'utf8')
const resetStyles = fs.readFileSync(resetPath, 'utf8')
const variableStyles = fs.readFileSync(variablesPath, 'utf8')
const utilitiesStyles = fs.readFileSync(utilitiesPath, 'utf8')

const insertAfterThemeDeclaration = (cssContent: string, cssToInsert: string) => {
  const regex = /(@theme\s+static\s*\{)(\n?)/
  const content = cssContent.replace(regex, `$1\n${cssToInsert}$2`)
  return `${content}\n`
}

const stringifiedTechTokens = techTokens.replace(/@theme\s+\w+\s*\{([^}]*)\}/s, '$1').trim()

const variablesStylesWithTailwindResets = insertAfterThemeDeclaration(
  variableStyles,
  stringifiedTechTokens
)

const generateThemeCss = () =>
  [fontFaces, variablesStylesWithTailwindResets, resetStyles, baseStyles, utilitiesStyles].join(
    '\n'
  )
// Generate main theme.css file
fs.writeFileSync(themePath, generateThemeCss(), 'utf8')

// Generate scss breakpoints file
const breakpointsContent = Object.entries(breakpoints).reduce((acc, [size, value]) => {
  return acc + `$breakpoint-${size}: ${value};\n`
}, '/* screens - auto-generated from token.ts - do not edit directly */\n')

fs.writeFileSync(breakpointsPath, breakpointsContent, 'utf8')
