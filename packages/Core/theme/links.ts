import { css } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeLinks = {
  default: {
    color: string
    fontWeight: string
    transition: string
  }
  primary: {
    default: ReturnType<typeof css>
    hover: ReturnType<typeof css>
  }
  secondary: {
    default: string
    hover: {
      opacity: number
    }
  }
}

export const getLinks = (theme: WuiTheme): ThemeLinks => {
  const { colors, fontWeights, transitions, underline } = theme

  return {
    default: {
      color: colors.dark[500],
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
      default: '',
      hover: {
        opacity: 0.6,
      },
    },
  }
}
