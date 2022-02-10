import { CSSObject } from '@xstyled/system'

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
  const { colors, fontSizes, fontWeights, space } = theme

  return {
    list: {
      fontSize: fontSizes.body3,
      fontWeight: fontWeights.medium,
      lineHeight: '1.92',
      padding: `${space.sm} 0`,
    },
    item: {
      default: {
        textDecoration: 'none',
        color: colors.light[100],
      },
      hover: {
        color: colors.dark[900],
      },
      active: {
        color: colors.dark[900],
      },
    },
    separator: {
      padding: `0 ${space.sm}`,
      color: colors.light[100],
    },
  }
}
