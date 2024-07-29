import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeRadios = {
  default: CSSObject
  checked: CSSObject
  checkedCenteredColor: {
    default: string
    disabled: string
  }
}

export const getRadios = (theme: WuiTheme): ThemeRadios => {
  const { colors, toRem } = theme

  return {
    default: {
      width: toRem(16),
      height: toRem(16),
    },
    checked: {
      color: colors['neutral-black'],
      borderColor: colors['primary-40'],
    },
    checkedCenteredColor: {
      default: colors['primary-40'],
      disabled: colors['nude-60'],
    },
  }
}
