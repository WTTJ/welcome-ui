import styled, { th } from '@xstyled/styled-components'
import { ClearButton } from '@welcome-ui/clear-button'

export const Close = styled(ClearButton)`
  position: absolute;
  z-index: 1;
  right: ${th('space.sm')};
  top: ${th('space.sm')};
`
