import styled from '@xstyled/styled-components'
import { system } from '@xstyled/system'
import { Text } from '@welcome-ui/text'

export const Link = styled.a`
  opacity: 0;
  color: primary.700;
  text-decoration: none;
  transition: medium;
`
export const Title = styled(Text)`
  ${system};

  &:hover {
    ${Link} {
      opacity: 1;
    }
  }
`
