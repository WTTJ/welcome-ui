import styled, { system, th } from '@wttj/xstyled-styled-components'
import { Box } from '@welcome-ui/box'
import { cardStyles } from '@welcome-ui/utils'

export const Card = styled(Box)`
  ${cardStyles};
  ${th('cards.default')};
  background-size: cover;
  background-position: center;

  ${system}
`

export const Body = styled(Box)`
  padding: lg;

  ${system}
`
