import styled from '@xstyled/styled-components'

import { Card } from '@old/Card'

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: xl;
  color: neutral-90;
  border-radius: xl;
  cursor: pointer;

  &,
  & span {
    transition: medium;
  }

  &:hover {
    border-color: neutral-90;
    span {
      color: neutral-90;
    }
  }
`
