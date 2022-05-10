import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
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
  ${th('texts.subtitle-sm')};
  text-transform: uppercase;
  color: dark.300;
  margin-top: xxl;
  margin-bottom: lg;
`

export const Item = styled(Link)`
  padding-bottom: xs;
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
