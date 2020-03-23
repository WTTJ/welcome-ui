import { css } from '@xstyled/styled-components'

export const getLinks = theme => {
  const { colors, underline, underlineHover } = theme
  return {
    default: {
      color: colors.dark[500]
    },
    primary: {
      default: underline,
      hover: underlineHover
    },
    secondary: {
      default: '',
      hover: css`
        opacity: 0.6;
      `
    }
  }
}
