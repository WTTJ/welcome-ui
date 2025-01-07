import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'

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
      fontSize: fontSizes.sm,
      minWidth: toRem(130),
      borderRadius: radii.md,
    },
    item: {
      backgroundColor: 'transparent',
      color: colors['beige-70'],
      '&:hover': {
        backgroundColor: colors['beige-30'],
        color: colors['neutral-90'],
      },
      '&:focus': {
        backgroundColor: colors['beige-30'],
        color: colors['neutral-90'],
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
        color: colors['beige-40'],
        cursor: 'not-allowed',
      },
    },
    separator: {
      backgroundColor: borderColor,
    },
  }
}
