import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type ThemeLinks = {
  default: CSSObject
  disabled: CSSObject
  primary: {
    default: CSSObject
    hover: CSSObject
  }
  secondary: {
    default: CSSObject
    hover: CSSObject
  }
  withExternalLink: CSSObject
}

export const getLinks = (theme: ThemeValues): ThemeLinks => {
  const { colors, fontWeights, icons, space, transitions } = theme

  return {
    default: {
      color: colors['neutral-90'],
      fontWeight: fontWeights.medium,
      transition: transitions.medium,
    },
    disabled: {
      backgroundImage: `linear-gradient(0deg, ${colors['neutral-30']}, ${colors['neutral-30']} 100%)`,
      color: colors['neutral-60'],
    },
    primary: {
      default: {},
      hover: {},
    },
    secondary: {
      default: {
        backgroundImage: `linear-gradient(0deg, ${colors['neutral-90']}, ${colors['neutral-90']} 100%)`,
      },
      hover: {
        color: colors['neutral-10'],
      },
    },
    withExternalLink: {
      backgroundSize: `calc(100% - ${icons.sm} - ${space.sm}) 50%`,
    },
  }
}
