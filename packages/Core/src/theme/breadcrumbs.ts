import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeBreadcrumbs = {
  item: {
    active: CSSObject
    default: CSSObject
    hover: CSSObject
  }
  list: CSSObject
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
