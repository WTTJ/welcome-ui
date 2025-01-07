import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

export interface ThemePagination {
  active: CSSObject
  default: CSSObject
  disabled: CSSObject
  item: CSSObject
}

export const getPagination = (theme: ThemeValues): ThemePagination => {
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
        backgroundColor: colors['neutral-30'],
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
