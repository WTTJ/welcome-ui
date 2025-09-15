import styled from '@xstyled/styled-components'

import { shouldForwardProp } from '@old/System'

export const UniversalLink = styled.aBox.withConfig({ shouldForwardProp })`
  color: inherit;
  text-decoration: none;
`
