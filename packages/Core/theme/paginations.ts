import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

export interface ThemePaginations {
  default: CSSObject
  item: CSSObject
  active: CSSObject
  number: CSSObject
  dots: CSSObject
}

export const getPaginations = (theme: WuiTheme): ThemePaginations => {
  const { borderWidths, colors, focus, fontSizes, fontWeights, toRem } = theme

  return {
    default: {
      width: toRem(30),
      height: toRem(30),
      color: colors.dark[900],
      fontWeight: fontWeights.bold,
    },
    item: {
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      borderRadius: '50%',
      '&:hover, &:focus': {
        backgroundColor: colors.dark[100],
      },
      '&:focus': focus(colors.dark[900]),
    },
    active: {
      backgroundColor: colors.primary[400],
      borderColor: colors.primary[400],
      color: colors.light[900],
      '&:hover, &:focus': {
        borderColor: colors.primary[400],
        backgroundColor: colors.primary[400],
      },
      '&:focus': focus(),
    },
    number: {
      fontSize: fontSizes.sm,
    },
    dots: {
      fontSize: fontSizes.sm,
    },
  }
}
