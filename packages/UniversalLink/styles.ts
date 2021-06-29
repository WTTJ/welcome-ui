import styled from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'

export const UniversalLink = styled('a').withConfig({ shouldForwardProp })`
  color: inherit;
  text-decoration: none;
`
