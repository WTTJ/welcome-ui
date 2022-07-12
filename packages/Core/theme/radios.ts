import { CSSObject } from 'styled-components'

import { WuiTheme } from './types'

export type ThemeRadios = {
  default: CSSObject
  checked: CSSObject
  withHint: {
    default: CSSObject
    hint: CSSObject
  }
}

export const getRadios = (theme: WuiTheme): ThemeRadios => {
  const { colors, fontSizes, spaces, toRem } = theme

  return {
    default: {
      width: toRem(20),
      height: toRem(20),
    },
    checked: {
      backgroundColor: colors['primary.400'],
      borderColor: colors['primary.400'],
    },
    withHint: {
      default: {
        fontSize: fontSizes.md,
        color: colors['dark.900'],
      },
      hint: {
        marginTop: spaces.xs,
        color: colors['dark.200'],
      },
    },
  }
}
