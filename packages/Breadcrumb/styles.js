import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { hexToRGBA } from '@welcome-ui/utils'

export const Breadcrumb = styled(Box)(
  ({ gradientBackground, isAtEnd, isAtStart, theme }) => css`
    ${th('breadcrumbs.list')};
    height: 100%;
    position: relative;

    ${!isAtStart &&
      css`
        &::before {
          ${gradient(theme, gradientBackground)};
          left: 0;
        }
      `}

    ${!isAtEnd &&
      css`
        &::after {
          ${gradient(theme, gradientBackground, 'left')};
          right: 0;
        }
      `}
  `
)

export const List = styled.ol`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`

const gradient = (theme, gradientBackground, position = 'right') => {
  const colorGradient = th(`colors.${gradientBackground}`)({ theme })
  const transparent = hexToRGBA(colorGradient, 0)

  return css`
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    width: 30;
    background: linear-gradient(to ${position}, ${colorGradient} 0%, ${transparent} 100%);
  `
}
