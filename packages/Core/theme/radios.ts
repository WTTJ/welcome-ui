import { CSSObject } from '@xstyled/styled-components'

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
  const { colors, fontSizes, space, toRem } = theme

  return {
    default: {
      width: toRem(20),
      height: toRem(20),
    },
    checked: {
      backgroundColor: colors['primary-500'],
      borderColor: colors['primary-500'],
    },
    withHint: {
      default: {
        fontSize: fontSizes.md,
        color: colors['dark-900'],
      },
      hint: {
        marginTop: space.xs,
        color: colors['dark-200'],
      },
    },
  }
}
