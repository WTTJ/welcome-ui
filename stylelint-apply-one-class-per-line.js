import stylelint from 'stylelint'

export const ruleName = 'custom/apply-one-class-per-line'
export const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: 'Each Tailwind class in @apply must be on its own line.',
})

export default stylelint.createPlugin(ruleName, (_, __, context) => {
  return (root, result) => {
    root.walkAtRules('apply', atRule => {
      if (!atRule.params) return
      const indentation = '  '

      const lines = atRule.params
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)

      let needsFix = false
      let fixedLines = []

      for (const line of lines) {
        const classesInLine = line.split(/\s+/).filter(Boolean)
        if (classesInLine.length > 1) {
          needsFix = true
          fixedLines.push(...classesInLine)
        } else {
          fixedLines.push(line)
        }
      }

      if (needsFix && context.fix) {
        atRule.raws.afterName = ''
        atRule.params =
          atRule.raws.before + indentation + fixedLines.join(atRule.raws.before + indentation)
      } else if (needsFix) {
        stylelint.utils.report({
          message: messages.expected,
          node: atRule,
          result,
          ruleName,
        })
      }
    })
  }
})
