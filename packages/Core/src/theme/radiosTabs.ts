import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeRadioTabs = {
  default: CSSObject
  checked: CSSObject
}

export const getRadioTabs = (theme: WuiTheme): ThemeRadioTabs => {
  const { colors } = theme

  return {
    default: {
      '&:hover': {
        backgroundColor: colors['nude-30'],
      },
    },
    checked: {
      backgroundColor: colors['primary-40'],
      color: theme.colors['neutral-black'],
      borderColor: colors['primary-40'],
      '&:hover': {
        backgroundColor: colors['primary-20'],
      },
    },
  }
}
