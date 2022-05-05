import { CSSObject } from '@xstyled/system'

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
        backgroundColor: colors.nude[200],
      },
    },
    checked: {
      backgroundColor: colors.primary[400],
      color: colors.light[900],
      borderColor: colors.primary[400],
      '&:hover': {
        backgroundColor: colors.primary[200],
      },
    },
  }
}
