import styled, { th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Link } from '@welcome-ui/link'

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
  margin-top: xl;
  margin-bottom: lg;
`

export const Item = styled(Link)`
  padding: 1 xs 1 lg;
  margin-bottom: xs;

  > .wui-text {
    font-weight: regular;
    background-size: 0% 50% !important;
  }

  &:hover {
    > .wui-text {
      color: dark.900;
      background-size: 100% 50% !important;
    }
  }

  &[aria-current='page'] {
    > .wui-text {
      color: dark.900;
      font-weight: bold;
      background-size: 100% 50% !important;
      background-position-y: 100%;
    }
  }
`
