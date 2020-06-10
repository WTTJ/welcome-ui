import { css } from '@xstyled/styled-components'

export const getDefaultFields = theme => {
  const { space, toRem } = theme

  return {
    default: css`
      color: nude.800;
      font-size: body3;
      /* Can't use 16 because that's a valid line-height value (16em) */
      line-height: 1rem;
      font-weight: regular;
      background-color: light.900;
      border-color: nude.200;
      border-width: 1px;
      border-style: solid;
      outline: none;
    `,
    sizes: {
      sm: {
        height: toRem(32),
        padding: `${space.xs} ${space.md}`
      },
      md: {
        height: toRem(36),
        padding: `${space.sm} ${space.md}`
      },
      lg: {
        height: toRem(40),
        padding: `${space.md}`
      }
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
    `,
    select: {
      default: css`
        max-height: ${toRem(155)};
      `,
      existing: css`
        color: nude.500;
        cursor: not-allowed;
      `,
      highlighted: css`
        background-color: nude.100;
        cursor: default;
      `,
      selectedAndHighlighted: css`
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%);
      `,
      selected: css`
        color: dark.200;
        font-weight: bold;
      `
    }
  }
}
