import styled from '@xstyled/styled-components'

import { shouldForwardProp } from '@old/System'

export const Input = styled.inputBox.withConfig({ shouldForwardProp })`
  display: none;
`
