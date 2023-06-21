import { definePreset } from '@pandacss/dev'

import { colors } from './theme/colors'
import { space } from './theme/space'

// transform { primary: 'tomato' } to { primary: { value: 'tomato' }}
const formatTokens = (object: Record<string, string>) => {
  return Object.keys(object).reduce((acc: Record<string, { value: string }>, key) => {
    acc[key] = { value: colors[key as keyof typeof colors] }
    return acc
  }, {})
}
export const preset = definePreset({
  theme: {
    tokens: {
      colors: formatTokens(colors),
      spacing: formatTokens(space),
    },
  },
})
