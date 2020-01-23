import styled, { th } from '@xstyled/styled-components'
import { Button } from '@welcome-ui/button'

export const Close = styled(Button)`
  position: absolute;
  z-index: 1;
  right: ${th('space.sm')};
  top: ${th('space.sm')};
`
