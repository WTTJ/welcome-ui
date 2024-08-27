import styled, { th } from '@xstyled/styled-components'
import { cardStyles } from '@welcome-ui/utils'

export const Card = styled.box`
  ${cardStyles};
  ${th('cards.default')};
  background-size: cover;
  background-position: center;
`

export const Body = styled.box`
  padding: lg;
`
