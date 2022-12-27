import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeLinks = {
  default: CSSObject
  withExternalLink: CSSObject
  disabled: CSSObject
  primary: {
    default: CSSObject
    hover: CSSObject
  }
  secondary: {
    default: CSSObject
    hover: CSSObject
  }
}

export const getLinks = (theme: WuiTheme): ThemeLinks => {
  const { colors, fontWeights, icons, space, transitions } = theme

  return {
    default: {
      color: colors['dark-900'],
      fontWeight: fontWeights.medium,
      transition: transitions.medium,
    },
    withExternalLink: {
      backgroundSize: `calc(100% - ${icons.sm} - ${space.xs}) 50%`,
    },
    disabled: {
      color: colors['dark-400'],
      backgroundImage: `linear-gradient(0deg, ${colors['dark-100']}, ${colors['dark-100']} 100%)`,
    },
    primary: {
      default: {},
      hover: {},
    },
    secondary: {
      default: {
        backgroundImage: `linear-gradient(0deg, ${colors['dark-900']}, ${colors['dark-900']} 100%)`,
      },
      hover: {
        color: colors['light-900'],
      },
    },
  }
}
