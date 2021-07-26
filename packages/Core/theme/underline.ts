import { css } from 'styled-components'

import { ThemeColors } from './colors'

export type ThemeUnderline = {
  default: ReturnType<typeof css>
  hover: ReturnType<typeof css>
}

export const getUnderline = ({ colors }: { colors: ThemeColors }): ThemeUnderline => {
  return {
    default: css`
      background-image: linear-gradient(0deg, ${colors.underline}, ${colors.underline} 100%);
      background-repeat: no-repeat;
      background-size: 100% 50%;
      background-position-y: calc(200% - 1px);
      transition: background-position-y 0.25s;
    `,
    hover: css`
      opacity: 1;
      background-position-y: 100%;
    `
  }
}
