import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

export type ThemeCheckboxes = {
  default: CSSObject
  disabled: CSSObject
  checked: CSSObject
}

export const getCheckboxes = (theme: WuiTheme): ThemeCheckboxes => {
  const { colors, toRem } = theme

  return {
    default: {
      width: toRem(20),
      height: toRem(20),
      flexShrink: 0,
    },
    disabled: {
      borderColor: colors.nude[700],
    },
    checked: {
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500],
    },
  }
}
