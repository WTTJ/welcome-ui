import { css, DefaultTheme } from 'styled-components'

export const cardStyles = (theme: DefaultTheme): ReturnType<typeof css> => css`
  ${theme.defaultCards};
`
