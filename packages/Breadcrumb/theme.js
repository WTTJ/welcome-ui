import { css } from '@xstyled/styled-components'

export const getBreadcrumbs = () => {
  return {
    list: css`
      font-size: body3;
      font-weight: medium;
    `,
    item: {
      default: css`
        color: inherit;
        text-decoration: none;
        transition: medium;
        padding: sm 0;
      `,
      hover: css`
        color: primary.200;
      `,
      active: css`
        color: primary.500;
      `
    },
    separator: css`
      padding: 0 sm;
    `
  }
}
