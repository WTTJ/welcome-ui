import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeSelection = CSSObject

export const getSelection = (theme: WuiTheme): ThemeSelection => {
  return {
    backgroundColor: theme.colors['primary-40'],
    color: theme.colors['neutral-90'],
  }
}
