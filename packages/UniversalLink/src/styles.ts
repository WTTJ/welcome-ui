import styled from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'

export const UniversalLink = styled.aBox.withConfig({ shouldForwardProp })`
  color: inherit;
  text-decoration: none;
`
