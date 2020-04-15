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
      `,
      hover: css`
        color: primary.200;
      `,
      active: css`
        color: primary.500;
        padding-right: sm;
      `
    },
    separator: css`
      padding: 0 sm;
    `
  }
}
