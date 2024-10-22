import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

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

export const getLinks = (theme: WuiTheme): ThemeLinks => {
  const { colors, fontWeights, icons, space, transitions } = theme

  return {
    default: {
      color: colors['neutral-90'],
      fontWeight: fontWeights.medium,
      transition: transitions.medium,
    },
    withExternalLink: {
      backgroundSize: `calc(100% - ${icons.sm} - ${space.sm}) 50%`,
    },
    disabled: {
      color: colors['neutral-50'],
      backgroundImage: `linear-gradient(0deg, ${colors['neutral-20']}, ${colors['neutral-20']} 100%)`,
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
  }
}
