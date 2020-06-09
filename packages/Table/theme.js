import { css } from '@xstyled/styled-components'

export const tables = {
  th: css`
    color: light.100;
    font-weight: medium;
    text-align: left;
    border-bottom-color: dark.900;
    border-bottom-width: sm;
    border-bottom-style: solid;
  `,
  td: css`
    text-align: left;
    padding: xl;
  `,
  tr: {
    default: css`
      border-bottom-color: light.800;
      border-bottom-width: sm;
      border-bottom-style: solid;
    `,
    error: css`
      background-color: danger.100;
      color: danger.700;
    `,
    warning: css`
      background-color: warning.100;
      color: warning.700;
    `,
    info: css`
      background-color: info.100;
      color: info.500;
    `,
    success: css`
      background-color: success.100;
      color: success.500;
    `,
    clickable: {
      cursor: 'pointer'
    }
  }
}
