import { CSSObject } from '@wttj/xstyled-styled-components'

import { WuiTheme } from './types'

export type ThemeBreadcrumbs = {
  list: CSSObject
  item: {
    default: CSSObject
    hover: CSSObject
    active: CSSObject
  }
  separator: CSSObject
}

export const getBreadcrumbs = (theme: WuiTheme): ThemeBreadcrumbs => {
  const { colors, space, texts } = theme

  return {
    list: {
      ...texts['subtitle-sm'],
      padding: `${space.sm} 0`,
    },
    item: {
      default: {
        color: colors['dark-400'],
        textDecoration: 'none',
      },
      hover: {
        color: colors['dark-700'],
      },
      active: {
        color: colors['dark-700'],
      },
    },
    separator: {
      padding: `0 ${space.xs}`,
      color: colors['dark-400'],
    },
  }
}
