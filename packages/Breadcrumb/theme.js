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
        padding-right: 0 md;
        transition: medium;
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
