import styled, { css, th } from '@wttj/xstyled-styled-components'
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
  color: dark-300;
  margin-top: xxl;
  margin-bottom: lg;
`

export const Item = styled(Link)(
  ({ theme }) => css`
    padding-bottom: xs;
    margin-bottom: xs;

    > .wui-text {
      font-weight: regular;
      color: dark-900 !important;
      background-image: linear-gradient(0deg, transparent, transparent 100%) !important;
    }

    &:hover {
      > .wui-text {
        background-size: 100% 100% !important;
        background-image: ${`linear-gradient(0deg, ${theme.colors['primary-500']}, ${theme.colors['primary-500']} 100%)`} !important;
      }
    }

    &[aria-current='page'] {
      > .wui-text {
        font-weight: bold;
        background-size: 100% 100% !important;
        background-image: ${`linear-gradient(0deg, ${theme.colors['primary-500']}, ${theme.colors['primary-500']} 100%)`} !important;
      }
    }
  `
)
