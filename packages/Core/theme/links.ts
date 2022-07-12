import { css, CSSObject } from 'styled-components'

import { WuiTheme } from './types'

export type ThemeLinks = {
  default: CSSObject
  primary: {
    default: ReturnType<typeof css>
    hover: ReturnType<typeof css>
  }
  secondary: {
    default: CSSObject
    hover: CSSObject
  }
}

export const getLinks = (theme: WuiTheme): ThemeLinks => {
  const { colors, fontWeights, transitions, underline } = theme

  return {
    default: {
      color: colors['dark.900'],
      fontWeight: fontWeights.medium,
      transition: transitions.medium,
    },
    primary: {
      default: css`
        > .wui-text {
          ${underline.default};
        }
      `,
      hover: css`
        > .wui-text {
          ${underline.hover};
        }
      `,
    },
    secondary: {
      default: null,
      hover: {
        opacity: 0.6,
      },
    },
  }
}
