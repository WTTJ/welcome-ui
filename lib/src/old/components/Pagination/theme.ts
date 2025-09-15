import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export interface ThemePagination {
  active: CSSObject
  default: CSSObject
  disabled: CSSObject
  item: CSSObject
}

export const getPagination = (theme: ThemeValues): ThemePagination => {
  const { colors, focus, fontSizes, fontWeights, toRem } = theme

  return {
    active: {
      '&:hover, &:focus': {
        backgroundColor: colors['neutral-90'],
      },
      backgroundColor: colors['neutral-90'],
      color: colors['neutral-10'],
    },
    default: {
      color: colors['neutral-90'],
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.bold,
      height: toRem(32),
      width: toRem(32),
    },
    disabled: {
      backgroundColor: colors['beige-40'],
      color: colors['beige-70'],
    },
    item: {
      '&:focus': { ...focus(colors['neutral-60']) },
      '&:hover, &:focus': {
        backgroundColor: colors['neutral-30'],
      },
    },
  }
}
