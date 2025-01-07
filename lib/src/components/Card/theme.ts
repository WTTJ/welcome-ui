import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export type ThemeCards = {
  default: CSSObject
}

export const getCards = (theme: ThemeValues): ThemeCards => {
  const { borderWidths, colors } = theme

  return {
    default: {
      backgroundColor: colors['neutral-10'],
      borderStyle: 'solid',
      borderWidth: borderWidths.sm,
      borderColor: colors['neutral-30'],
    },
  }
}
