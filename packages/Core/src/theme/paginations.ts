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
      color: colors['neutral-black'],
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.xs,
    },
    item: {
      '&:hover, &:focus': {
        backgroundColor: colors['neutral-20'],
      },
      '&:focus': { ...focus(colors['neutral-50']) },
    },
    active: {
      backgroundColor: colors['neutral-black'],
      color: colors['neutral-white'],
      '&:hover, &:focus': {
        backgroundColor: colors['neutral-black'],
      },
    },
    disabled: {
      backgroundColor: colors['nude-40'],
      color: colors['nude-70'],
    },
  }
}
