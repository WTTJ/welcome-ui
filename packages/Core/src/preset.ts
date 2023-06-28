import { definePreset } from '@pandacss/dev'

import { colors } from './theme/colors'
import { space } from './theme/space'

// transform { primary: 'tomato' } to { primary: { value: 'tomato' }}
export const formatTokens = (object: Record<string, string>) => {
  return Object.keys(object).reduce((acc: Record<string, { value: string }>, key) => {
    acc[key] = { value: object[key] }
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

export const defaultPreset = { colors: formatTokens(colors), spacing: formatTokens(space) }
