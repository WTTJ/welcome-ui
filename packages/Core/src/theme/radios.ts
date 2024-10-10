import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeRadios = {
  checked: CSSObject
  checkedCenteredColor: {
    default: string
    disabled: string
  }
  default: CSSObject
}

export const getRadios = (theme: WuiTheme): ThemeRadios => {
  const { colors, toRem } = theme

  return {
    default: {
      width: toRem(16),
      height: toRem(16),
    },
    checked: {
      color: colors['dark-900'],
      borderColor: colors['primary-500'],
    },
    checkedCenteredColor: {
      default: colors['primary-500'],
      disabled: colors['nude-600'],
    },
  }
}
