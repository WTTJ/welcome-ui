import styled from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'
import { th } from '@xstyled/system'
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
