import { css } from 'styled-components'

const underlineHover = css`
  opacity: 1;
  background-position-y: 100%;
`

export const getUnderline = theme => {
  return {
    default: css`
      background-image: linear-gradient(
        0deg,
        ${theme.colors.underline},
        ${theme.colors.underline} 100%
      );
      background-repeat: no-repeat;
      background-size: 100% 50%;
      background-position-y: calc(200% - 1px);
      transition: background-position-y 0.25s;
    `,
    hover: css`
      ${underlineHover};
    `
  }
}
