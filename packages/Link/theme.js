import { css } from '@xstyled/styled-components'

export const getLinks = theme => {
  const { colors, fontWeights, transitions, underline } = theme

  return {
    default: {
      color: colors.dark[500],
      fontWeight: fontWeights.medium,
      transition: transitions.medium
    },
    primary: {
      default: css`
        .wui-text {
          ${underline.default};
        }
      `,
      hover: css`
        .wui-text {
          ${underline.hover};
        }
      `
    },
    secondary: {
      default: '',
      hover: {
        opacity: 0.6
      }
    }
  }
}
