import styled from '@wttj/xstyled-styled-components'
import { Text } from '@welcome-ui/text'

export const Link = styled.aBox`
  opacity: 0;
  color: primary-600;
  text-decoration: none;
  transition: medium;
`
export const Title = styled(Text)`
  &:hover {
    ${Link} {
      opacity: 1;
    }
  }
`
