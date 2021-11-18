import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

export type ThemeSelection = CSSObject

export const getSelection = (theme: WuiTheme): ThemeSelection => {
  return {
    backgroundColor: theme.colors.primary[500],
    color: theme.colors.light[900],
  }
}
