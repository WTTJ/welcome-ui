import styled from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { cva } from '@welcome-ui/panda/css'

export const UniversalLink = styled.aBox.withConfig({ shouldForwardProp })`
  color: inherit;
  text-decoration: none;
`

export const universalLinkStyles = cva({
  base: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
