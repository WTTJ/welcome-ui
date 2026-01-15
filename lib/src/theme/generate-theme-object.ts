import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export type CSSVariables = Record<string, string>

function parseAllCSSVariables(cssContent: string): CSSVariables {
  const cssVarRegex = /(--[^:]+):\s*([^;]+);/g
  const matches = [...cssContent.matchAll(cssVarRegex)]

  return matches.reduce<CSSVariables>((acc, match) => {
    const variableName = match[1].trim()
    const variableValue = match[2].trim()
    acc[variableName] = variableValue
    return acc
  }, {})
}

const variablesContent = fs.readFileSync(path.resolve(__dirname, './variables.css'), 'utf-8')
const teckTokensContent = fs.readFileSync(path.resolve(__dirname, './techTokens.css'), 'utf-8')

const themeVariables = parseAllCSSVariables(`${variablesContent}\n${teckTokensContent}`)

const commonContent =
  `// This file is auto-generated from generate-theme-object.ts - do not edit directly\n` +
  `export const themeVariables = ${JSON.stringify(themeVariables, null, 2)}`

fs.writeFileSync(path.resolve(__dirname, './variables.ts'), `${commonContent} as const`, 'utf-8')

fs.writeFileSync(path.resolve(__dirname, './variables.js'), `${commonContent}`, 'utf-8')
