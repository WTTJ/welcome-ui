import { css } from '@xstyled/styled-components'

export const getModals = ({ toRem }) => ({
  backdrop: css`
    background-color: overlay;
    z-index: 999;
  `,
  default: css`
    z-index: 999;
  `,
  footer: css`
    border-top-color: light.800;
    border-top-style: solid;
    border-top-width: sm;
    padding: lg xxl;
  `,
  title: css`
    border-bottom-color: light.800;
    border-bottom-style: solid;
    border-bottom-width: sm;
    padding: lg xxl;
    /** space of close button */
    padding-right: 50;
  `,
  gutter: toRem(32),
  sizes: {
    sm: css`
      width: 400;
    `,
    md: css`
      width: 550;
    `,
    lg: css`
      width: 680;
    `,
    auto: css``
  },
  cover: css``
})
