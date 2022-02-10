import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Li = styled.li`
  a {
    display: block;
  }
`

export const MainTitle = styled(Box)`
  ${th('texts.subtitle2')};
  text-transform: uppercase;
  color: light.100;
  margin-top: xxl;
  margin-bottom: lg;
`

export const Item = styled.a`
  text-decoration: none;
  padding: 1 xxs 1 xl;
  margin-bottom: xxs;
  transition: medium;
  color: dark.700;
  font-size: body2;

  &:hover {
    color: dark.900;
    padding-left: 3xl;
  }

  &[aria-current='page'] {
    color: dark.900;
    font-weight: bold;
  }
`
