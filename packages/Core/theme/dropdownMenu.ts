import { CSSObject } from 'styled-components'

import { WuiTheme } from './types'

export type ThemeDropdownMenu = {
  inner: CSSObject
  item: CSSObject
  separator: CSSObject
}

export const getDropdownMenu = (theme: WuiTheme): ThemeDropdownMenu => {
  const { colors, fontSizes, spaces, toRem } = theme
  const borderColor = colors['nude.200']

  return {
    inner: {
      fontSize: fontSizes.sm,
      minWidth: toRem(130),
    },
    item: {
      padding: `${spaces.sm} ${spaces.md}`,
      backgroundColor: 'transparent',
      color: colors['nude.700'],
      '&:hover': {
        backgroundColor: colors['nude.200'],
        color: colors['dark.900'],
      },
      '&:focus': {
        backgroundColor: colors['nude.200'],
        color: colors['dark.900'],
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
        color: colors['nude.400'],
        cursor: 'not-allowed',
      },
    },
    separator: {
      backgroundColor: borderColor,
    },
  }
}
