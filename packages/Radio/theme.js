import { css } from '@xstyled/styled-components'

export const radios = {
  default: css`
    width: 18;
    height: 18;
    border-radius: 50%;
  `,
  checked: css`
    background-color: primary.500;
    border-color: primary.500;
    color: dark.900;
    border-radius: 50%;
  `
}
