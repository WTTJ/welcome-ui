import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

export const Props = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${th.color('nude.200')};
  border-radius: md;
  background-color: light.100;
  color: nude.800;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: xl;
  border-bottom: 1px solid ${th.color('nude.200')};

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

  &:last-child {
    border-bottom: 0;
  }
`

export const Name = styled.div`
  flex: 1;
  color: primary.500;
`

export const Type = styled.div`
  flex: 2;
  padding: sm 0;

  @media screen and (min-width: 600px) {
    padding: 0 sm;
  }
`

export const Value = styled.div`
  flex: 1;
`

export const ValueRequired = styled.span`
  color: primary.500;
`
