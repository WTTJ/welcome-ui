import styled from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Link = styled.a`
  opacity: 0;
  color: primary.700;
  text-decoration: none;
  transition: medium;
`
export const Title = styled(Box)`
  &:hover {
    ${Link} {
      opacity: 1;
    }
  }
`
