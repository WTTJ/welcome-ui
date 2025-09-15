import styled from '@xstyled/styled-components'

import { shouldForwardProp } from '@/System'

export const Input = styled.inputBox.withConfig({ shouldForwardProp })`
  display: none;
`
