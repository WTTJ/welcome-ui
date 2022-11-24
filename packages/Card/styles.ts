import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { cardStyles } from '@welcome-ui/utils'

export const Card = styled(Box)(
  ({ theme }) => css`
    ${cardStyles};
    ${theme.cards.default};
    background-size: cover;
    background-position: center;
  `
)

export const Body = styled(Box)`
  padding: ${({ theme }) => theme.spaces.lg};
`
