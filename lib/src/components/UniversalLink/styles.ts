import styled from '@xstyled/styled-components'

import { shouldForwardProp } from '../System'

export const UniversalLink = styled.aBox.withConfig({ shouldForwardProp })`
  color: inherit;
  text-decoration: none;
`
