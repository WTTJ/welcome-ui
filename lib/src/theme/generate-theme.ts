import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import tokens from './tokens.json' assert { type: 'json' }

const indentation = '  ' // 2 spaces for indentation
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fontFacesPath = path.join(__dirname, 'fontFaces.css')
const basePath = path.join(__dirname, 'base.css')
const resetPath = path.join(__dirname, 'resets.css')
const themePath = path.join(__dirname, 'theme.css')
const variablesPath = path.join(__dirname, 'variables.css')
const breakpointsPath = path.join(__dirname, 'utils', 'breakpoints.scss')

const fontFaces = fs.readFileSync(fontFacesPath, 'utf8')
const baseStyles = fs.readFileSync(basePath, 'utf8')
const resetStyles = fs.readFileSync(resetPath, 'utf8')
const variableStyles = fs.readFileSync(variablesPath, 'utf8')

const getStringFrom = (map: Record<string, string>) => `${map.property} {\n${map.value}}\n`

const resetTailwindTokens = `${indentation}--*: initial;\n`
const variablesStylesWithTailwindResets = variableStyles.replace(
  '@theme {\n',
  `@theme {\n${resetTailwindTokens}`
)

const baseLayer = { property: '@layer base', value: `${resetStyles}\n${baseStyles}` }

const generateThemeCss = () =>
  [fontFaces, variablesStylesWithTailwindResets, getStringFrom(baseLayer)].join('\n')

// Generate main theme.css file
fs.writeFileSync(themePath, generateThemeCss(), 'utf8')

// Generate scss breakpoints file
const breakpointsContent = Object.entries(tokens.breakpoint).reduce((acc, [key, value]) => {
  if (key !== '$type' && typeof value === 'object' && '$value' in value) {
    return acc + `$breakpoint-${key}: ${value['$value']};\n`
  }
  return acc
}, '/* screens - auto-generated from token.ts - do not edit directly */\n')

fs.writeFileSync(breakpointsPath, breakpointsContent, 'utf8')
