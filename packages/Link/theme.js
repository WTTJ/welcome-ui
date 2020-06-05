import { css } from 'styled-components'

export const getLinks = theme => {
  const { colors, fontWeights, transitions, underline } = theme
  return {
    default: {
      color: colors.dark[500],
      'font-weight': fontWeights.medium,
      transition: transitions.medium
    },
    primary: {
      default: underline.default,
      hover: underline.hover
    },
    'primary-underline-span': {
      default: css`
        > span {
          ${underline.default};
        }
      `,
      hover: css`
        > span {
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
