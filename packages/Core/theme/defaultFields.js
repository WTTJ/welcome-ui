import { css } from '@xstyled/styled-components'

export const defaultFields = {
  default: css`
    color: nude.800;
    font-size: body3;
    line-height: 16;
    font-weight: regular;
    background-color: light.900;
    border-color: nude.200;
    border-width: 1px;
    border-style: solid;
    outline: none;
  `,
  sizes: {
    sm: css`
      height: 32;
      padding: xs md;
    `,
    md: css`
      height: 36;
      padding: sm md;
    `,
    lg: css`
      height: 40;
      padding: md;
    `
  },
  disabled: css`
    background-color: nude.500;
    color: nude.700;
    cursor: not-allowed;
  `,
  placeholder: css`
    color: nude.600;
  `,
  focused: css`
    border-color: primary.500;
  `
}
