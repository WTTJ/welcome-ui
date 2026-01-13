import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import semantics from './tokens/semantics.json' assert { type: 'json' }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fontFacesPath = path.join(__dirname, 'fontFaces.css')
const basePath = path.join(__dirname, 'base.css')
const utilitiesPath = path.join(__dirname, 'utilities.css')
const resetPath = path.join(__dirname, 'resets.css')
const themePath = path.join(__dirname, 'theme.css')
const techTokensPath = path.join(__dirname, 'techTokens.css')
const variablesPath = path.join(__dirname, 'variables.css')
const breakpointsPath = path.join(__dirname, '../utils/scss/breakpoints.scss')

const fontFaces = fs.readFileSync(fontFacesPath, 'utf8')
const baseStyles = fs.readFileSync(basePath, 'utf8')
const techTokens = fs.readFileSync(techTokensPath, 'utf8')
const resetStyles = fs.readFileSync(resetPath, 'utf8')
const variableStyles = fs.readFileSync(variablesPath, 'utf8')
const utilitiesStyles = fs.readFileSync(utilitiesPath, 'utf8')

const insertAfterThemeDeclaration = (cssContent: string, cssToInsert: string) => {
  const regex = /(@theme\s+static\s*\{)(\n?)/
  return cssContent.replace(regex, `$1\n${cssToInsert}$2`)
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
const breakpointsContent = Object.entries(semantics.breakpoint).reduce((acc, [key, value]) => {
  if (key !== '$type' && typeof value === 'object' && 'value' in value) {
    return acc + `$breakpoint-${key}: ${value['value']};\n`
  }
  return acc
}, '/* screens - auto-generated from token.ts - do not edit directly */\n')

fs.writeFileSync(breakpointsPath, breakpointsContent, 'utf8')
