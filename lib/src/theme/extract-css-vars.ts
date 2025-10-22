import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cssFilePath = path.join(__dirname, 'theme.css')
const typesFilePath = path.join(__dirname, './types.ts')

const cssContent = fs.readFileSync(cssFilePath, 'utf-8')
const typesFileContent = fs.readFileSync(typesFilePath, 'utf-8')
const typesFileContentWithoutThemeVariables = typesFileContent.replace(
  /\n*export type ThemeVariables = \{[^}]+\}/s,
  ''
)

const varRegex = /--([\w-]+)\s*:/g
const matches = [...cssContent.matchAll(varRegex)]

let ts = `${typesFileContentWithoutThemeVariables}\nexport type ThemeVariables = {\n`
matches.forEach(match => {
  ts += `  '--${match[1]}': string\n`
})
ts += '}\n'

fs.writeFileSync(typesFilePath, ts)
// eslint-disable-next-line no-console
console.log('TypeScript types generated in', typesFilePath)
