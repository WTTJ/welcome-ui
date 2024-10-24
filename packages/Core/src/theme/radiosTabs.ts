import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeRadioTabs = {
  checked: CSSObject
  default: CSSObject
}

export const getRadioTabs = (theme: WuiTheme): ThemeRadioTabs => {
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
