import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type ThemeCards = {
  default: CSSObject
}

export const getCards = (theme: ThemeValues): ThemeCards => {
  const { borderWidths, colors } = theme

  return {
    default: {
      backgroundColor: colors['neutral-10'],
      borderColor: colors['neutral-30'],
      borderStyle: 'solid',
      borderWidth: borderWidths.sm,
    },
  }
}
