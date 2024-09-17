import { Card } from '@welcome-ui/card'
import styled from '@xstyled/styled-components'

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: xl;
  color: dark-900;
  border-radius: xl;
  cursor: pointer;

  &,
  & span {
    transition: medium;
  }

  &:hover {
    border-color: dark-900;
    span {
      color: dark-900;
    }
  }
`
