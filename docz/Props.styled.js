import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${th.color('nude.200')};
  border-bottom: none;
  border-radius: md;
  background-color: light.100;
  color: nude.800;
`

export const Row = styled.tr`
  padding: lg xl;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`

export const Cell = styled.td`
  padding: lg xl;
  border-bottom: 1px solid ${th.color('nude.200')};
`

export const Head = styled.th`
  padding: lg xl;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid ${th.color('nude.200')};
`

export const Name = styled.p`
  color: primary.500;
`

export const Required = styled.span`
  color: primary.500;
`
