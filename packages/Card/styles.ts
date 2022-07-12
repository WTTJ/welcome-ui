import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'

export const Card = styled(Box)(
  ({ theme }) => css`
    ${theme.defaultCards};
    ${theme.cards.default};
    background-size: cover;
    background-position: center;
  `
)

export const Body = styled(Box)`
  padding: ${({ theme }) => theme.spaces.lg};
`
