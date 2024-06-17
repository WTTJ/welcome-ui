import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeDropdownMenu = {
  inner: CSSObject
  item: CSSObject
  separator: CSSObject
}

export const getDropdownMenu = (theme: WuiTheme): ThemeDropdownMenu => {
  const { colors, fontSizes, toRem } = theme
  const borderColor = colors['nude-30']

  return {
    inner: {
      fontSize: fontSizes.sm,
      minWidth: toRem(130),
    },
    item: {
      backgroundColor: 'transparent',
      color: colors['nude-70'],
      '&:hover': {
        backgroundColor: colors['nude-30'],
        color: colors['neutral-black'],
      },
      '&:focus': {
        backgroundColor: colors['nude-30'],
        color: colors['neutral-black'],
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
        color: colors['nude-40'],
        cursor: 'not-allowed',
      },
    },
    separator: {
      backgroundColor: borderColor,
    },
  }
}
