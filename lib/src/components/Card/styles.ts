import styled, { system, th } from '@xstyled/styled-components'

export const Card = styled.divBox`
  overflow: 'hidden';
  border-radius: md;
  ${th('cards.default')};
  background-size: cover;
  background-position: center;

  ${system};
`

export const Body = styled.divBox`
  padding: lg;

  ${system};
`
