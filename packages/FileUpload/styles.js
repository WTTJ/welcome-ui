import styled from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'

export const Input = styled('input').withConfig({ shouldForwardProp })`
  display: none;
`
