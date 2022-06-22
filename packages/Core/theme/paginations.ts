import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export interface ThemePaginations {
  default: CSSObject
  item: CSSObject
  arrow: CSSObject
  active: CSSObject
  number: CSSObject
  dots: CSSObject
}

export const getPaginations = (theme: WuiTheme): ThemePaginations => {
  const { colors, focus, fontSizes, fontWeights, toRem } = theme

  return {
    default: {
      width: toRem(32),
      height: toRem(32),
      color: colors.dark[900],
      fontWeight: fontWeights.bold,
    },
    item: {
      borderRadius: '50%',
      '&:hover, &:focus': {
        backgroundColor: colors.dark[100],
      },
      '&:focus': focus(colors.dark[900]),
    },
    arrow: {
      '&:hover, &:focus': {
        color: colors.nude[600],
      },
    },
    active: {
      backgroundColor: colors.dark[900],
      color: colors.light[900],
      '&:hover, &:focus': {
        backgroundColor: colors.dark[900],
      },
    },
    number: {
      fontSize: fontSizes.xs,
    },
    dots: {
      fontSize: fontSizes.xs,
    },
  }
}
