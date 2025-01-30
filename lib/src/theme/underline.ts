import { css } from '@xstyled/styled-components'

import { ThemeColors } from './colors'

export type ThemeUnderline = {
  default: ReturnType<typeof css>
  hover: ReturnType<typeof css>
}

export const getUnderline = ({ colors }: { colors: ThemeColors }): ThemeUnderline => {
  return {
    default: css`
      background-image: linear-gradient(
        0deg,
        ${colors['primary-40']},
        ${colors['primary-40']} 100%
      );
      background-repeat: no-repeat;
      background-size: 100% 50%;
      background-position-y: calc(200% - 2px);
      transition:
        background-position-y 250ms,
        background-size 250ms,
        color 250ms;
    `,
    hover: css`
      opacity: 1;
      background-position-y: 100%;
      background-size: 100% 100%;
    `,
  }
}
