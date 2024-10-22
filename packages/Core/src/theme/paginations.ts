import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export interface ThemePaginations {
  active: CSSObject
  default: CSSObject
  disabled: CSSObject
  item: CSSObject
}

export const getPaginations = (theme: WuiTheme): ThemePaginations => {
  const { colors, focus, fontSizes, fontWeights, toRem } = theme

  return {
    default: {
      width: toRem(32),
      height: toRem(32),
      color: colors['neutral-90'],
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.xs,
    },
    item: {
      '&:hover, &:focus': {
        backgroundColor: colors['neutral-20'],
      },
      '&:focus': { ...focus(colors['neutral-60']) },
    },
    active: {
      backgroundColor: colors['neutral-90'],
      color: colors['neutral-10'],
      '&:hover, &:focus': {
        backgroundColor: colors['neutral-90'],
      },
    },
    disabled: {
      backgroundColor: colors['beige-40'],
      color: colors['beige-70'],
    },
  }
}
