import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeDropdownMenu = {
  inner: CSSObject
  item: CSSObject
  separator: CSSObject
}

export const getDropdownMenu = (theme: ThemeValues): ThemeDropdownMenu => {
  const { colors, fontSizes, radii, toRem } = theme
  const borderColor = colors['beige-30']

  return {
    inner: {
      borderRadius: radii.md,
      fontSize: fontSizes.sm,
      minWidth: toRem(130),
    },
    item: {
      '&:focus': {
        backgroundColor: colors['beige-30'],
        color: colors['neutral-90'],
      },
      '&:hover': {
        backgroundColor: colors['beige-30'],
        color: colors['neutral-90'],
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
        color: colors['beige-40'],
        cursor: 'not-allowed',
      },
      backgroundColor: 'transparent',
      color: colors['beige-70'],
    },
    separator: {
      backgroundColor: borderColor,
    },
  }
}
