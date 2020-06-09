import { css } from '@xstyled/styled-components'

export const getCheckboxes = () => ({
  default: css`
    width: 20;
    height: 20;
    flex-shrink: 0;
  `,
  disabled: css`
    border-color: nude.700;
  `,
  checked: css`
    background-color: primary.500;
    border-color: primary.500;
    color: dark.900;
  `
})
