import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

export type ThemeRadioTabs = {
  checked: CSSObject
  default: CSSObject
}

export const getRadioTabs = (theme: ThemeValues): ThemeRadioTabs => {
  const { colors } = theme

  return {
    default: {
      '&:hover': {
        backgroundColor: colors['beige-30'],
      },
    },
    checked: {
      backgroundColor: colors['primary-40'],
      color: theme.colors['neutral-90'],
      borderColor: colors['primary-40'],
      '&:hover': {
        backgroundColor: colors['primary-30'],
      },
    },
  }
}
