import styled from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'
import { th } from '@xstyled/system'
import { cardStyles } from '@welcome-ui/utils'
import { Shape } from '@welcome-ui/shape'

export const Card = styled(Box)`
  ${cardStyles};
  ${th('cards.default')};
  background-size: cover;
  background-position: center;

  ${system}
`

export const Body = styled(Box)`
  padding: lg;
  word-break: break-word;

  ${system}
`

export const Cover = styled(Shape)`
  ${th('cards.cover')};

  ${system}
`
