import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeRadioTabs = {
  checked: CSSObject
  default: CSSObject
}

export const getRadioTabs = (theme: ThemeValues): ThemeRadioTabs => {
  const { colors } = theme

  return {
    checked: {
      '&:hover': {
        backgroundColor: colors['primary-30'],
      },
      backgroundColor: colors['primary-40'],
      borderColor: colors['primary-40'],
      color: theme.colors['neutral-90'],
    },
    default: {
      '&:hover': {
        backgroundColor: colors['beige-30'],
      },
    },
  }
}
