import { CSSObject } from '@xstyled/styled-components'

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
      width: toRem(16),
      height: toRem(16),
      flexShrink: 0,
    },
    disabled: {
      borderColor: colors['nude-600'],
    },
    checked: {
      color: colors['dark-900'],
      backgroundColor: colors['primary-500'],
      borderColor: colors['primary-500'],
    },
  }
}
