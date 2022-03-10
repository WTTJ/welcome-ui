import { hexToRGB } from '@welcome-ui/utils'
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
        backgroundColor: `rgba(${hexToRGB(colors.dark[900])}, 0.1)`,
      },
      '&:focus': focus(colors.dark[900]),
    },
    active: {
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500],
      color: colors.light[900],
      '&:hover, &:focus': {
        borderColor: colors.primary[500],
        backgroundColor: colors.primary[500],
      },
      '&:focus': focus(),
    },
    number: {
      fontSize: fontSizes.body3,
    },
    dots: {
      fontSize: fontSizes.body3,
    },
  }
}
