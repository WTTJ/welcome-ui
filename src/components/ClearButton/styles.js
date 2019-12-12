import styled, { keyframes } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { Button } from '../Button/styles'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ClearButton = styled(Button)`
  pointer-events: auto;
  animation: ${th('transitions.medium')};
  animation-name: ${fade};
`
