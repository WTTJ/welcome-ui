import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeDropdownMenu = {
  gutter: number
  inner: CSSObject
  item: CSSObject
  separator: CSSObject
}

export const getDropdownMenu = (theme: WuiTheme): ThemeDropdownMenu => {
  const { colors, fontSizes, toRem } = theme
  const borderColor = colors['nude-200']

  return {
    gutter: 10,
    inner: {
      fontSize: fontSizes.sm,
      minWidth: toRem(130),
    },
    item: {
      backgroundColor: 'transparent',
      color: colors['nude-700'],
      '&:hover': {
        backgroundColor: colors['nude-200'],
        color: colors['dark-900'],
      },
      '&:focus': {
        backgroundColor: colors['nude-200'],
        color: colors['dark-900'],
      },
      '&[disabled]': {
        backgroundColor: 'transparent',
        color: colors['nude-400'],
        cursor: 'not-allowed',
      },
    },
    separator: {
      backgroundColor: borderColor,
    },
  }
}
