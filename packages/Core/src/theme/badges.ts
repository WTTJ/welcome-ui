import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeAccordions = {
  default: CSSObject
  variants: {
    default: CSSObject
    primary: CSSObject
  }
  disabled: {
    default: CSSObject
    primary: CSSObject
  }
  sizes: {
    sm: CSSObject
    md: CSSObject
  }
}

export const getBadges = (theme: WuiTheme): ThemeAccordions => {
  const { colors, fonts, fontWeights, space, texts, toRem } = theme

  return {
    default: {
      ...texts.xs,
      fontWeight: fontWeights.medium,
      fontFamily: fonts.headings,
    },
    variants: {
      default: {
        color: colors['nude-700'],
        backgroundColor: colors['nude-200'],
      },
      primary: {
        color: colors['dark-900'],
        backgroundColor: colors['primary-500'],
      },
    },
    disabled: {
      default: {
        color: colors['nude-400'],
        backgroundColor: colors['nude-100'],
      },
      primary: {
        color: colors['primary-800'],
        backgroundColor: colors['primary-600'],
      },
    },
    sizes: {
      sm: {
        padding: space.xxs,
        height: toRem(16),
        borderRadius: toRem(14),
      },
      md: {
        padding: space.xs,
        height: toRem(20),
        borderRadius: toRem(14),
      },
    },
  }
}
