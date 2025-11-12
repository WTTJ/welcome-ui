import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import stylelint from 'stylelint'

const { utils } = stylelint

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const themeTypesPath = path.resolve(__dirname, '../lib/src/theme/types.ts')

const extractThemeTokens = () => {
  const content = fs.readFileSync(themeTypesPath, 'utf-8')
  const regex = /'(--[\w-]+)'\s*:/g
  const tokens = []
  let match
  while ((match = regex.exec(content))) {
    tokens.push(match[1])
  }
  return tokens
}

const knownTokens = extractThemeTokens()

export const ruleName = 'custom/valid-theme-token'

export const messages = {
  rejected: token => `The "${token}" token does not exist in lib/src/theme/theme.css`,
}

const isCamelCase = token => /[a-z][A-Z]/.test(token.replace(/^--/, ''))
const isSingleWord = token => {
  const core = token.replace(/^--/, '')
  return !core.includes('-')
}

export const rule = () => {
  return (root, result) => {
    root.walkDecls(decl => {
      const regex = /var\(\s*(--[\w-]+)\s*[),]/g
      let match
      while ((match = regex.exec(decl.value))) {
        const token = match[1]
        if (isCamelCase(token) || isSingleWord(token)) {
          // Ignore camelCase or single-word tokens
          continue
        }
        if (!knownTokens.includes(token)) {
          utils.report({
            message: messages.rejected(token),
            node: decl,
            result,
            ruleName,
            word: token,
          })
        }
      }
    })
  }
}
