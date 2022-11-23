import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { Link } from '@welcome-ui/link'

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Li = styled.li`
  a {
    display: block;
  }
`

export const MainTitle = styled(Box)(
  ({ theme }) => css`
    ${theme.texts['subtitle-sm']};
    text-transform: uppercase;
    color: ${theme.colors['dark-300']};
    margin-top: ${theme.space.xxl};
    margin-bottom: ${theme.space.lg};
  `
)

export const Item = styled(Link)(
  ({ theme }) => css`
    padding-bottom: ${theme.space.xs};
    margin-bottom: ${theme.space.xs};

    > .wui-text {
      font-weight: ${theme.fontWeights.regular};
      background-size: 0% 50% !important;
    }

    &:hover {
      > .wui-text {
        color: ${theme.colors['dark-900']};
        background-size: 100% 50% !important;
      }
    }

    &[aria-current='page'] {
      > .wui-text {
        color: ${theme.colors['dark-900']};
        font-weight: ${theme.fontWeights.bold};
        background-size: 100% 50% !important;
        background-position-y: 100%;
      }
    }
  `
)
