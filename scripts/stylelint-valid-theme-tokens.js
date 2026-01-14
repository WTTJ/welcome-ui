import stylelint from 'stylelint'

import { themeVariables } from '../lib/src/theme/variables.js'

const { utils } = stylelint

const knownTokens = Object.keys(themeVariables)

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
