import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export interface ThemePaginations {
  default: CSSObject
  item: CSSObject
  active: CSSObject
  disabled: CSSObject
}

export const getPaginations = (theme: WuiTheme): ThemePaginations => {
  const { colors, focus, fontSizes, fontWeights, toRem } = theme

  return {
    default: {
      width: toRem(32),
      height: toRem(32),
      color: colors['dark-900'],
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.xs,
    },
    item: {
      '&:hover, &:focus': {
        backgroundColor: colors['dark-100'],
      },
      '&:focus': { ...focus(colors['dark-500']) },
    },
    active: {
      backgroundColor: colors['dark-900'],
      color: colors['light-900'],
      '&:hover, &:focus': {
        backgroundColor: colors['dark-900'],
      },
    },
    disabled: {
      backgroundColor: colors['nude-400'],
      color: colors['nude-700'],
    },
  }
}
