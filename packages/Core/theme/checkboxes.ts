import { CSSObject } from 'styled-components'

import { WuiTheme } from './types'

export type ThemeCheckboxes = {
  default: CSSObject
  disabled: CSSObject
  checked: CSSObject
}

export const getCheckboxes = (theme: WuiTheme): ThemeCheckboxes => {
  const { colors } = theme
  return {
    default: {
      width: 20,
      height: 20,
      flexShrink: 0,
    },
    disabled: {
      borderColor: colors['nude.700'],
    },
    checked: {
      backgroundColor: colors['primary.400'],
      borderColor: colors['primary.400'],
    },
  }
}
