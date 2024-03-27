import { CSSObject } from '@wttj/xstyled-styled-components'

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
        backgroundColor: colors['nude-200'],
      },
    },
    checked: {
      backgroundColor: colors['primary-500'],
      color: theme.colors['dark-900'],
      borderColor: colors['primary-500'],
      '&:hover': {
        backgroundColor: colors['primary-200'],
      },
    },
  }
}
