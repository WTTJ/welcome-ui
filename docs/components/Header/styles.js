import styled, { css } from '@xstyled/styled-components'
import { Drawer as WUIDrawer } from '@welcome-ui/drawer'

import { Item } from './NavBar/styles'

export const headerHeight = '3.75rem' // 60

export const Header = styled.header(
  ({ variant = 'black' }) => css`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${headerHeight};
    background-color: black;
    font-size: md;
    padding: 0 md;
    top: 0;
    width: 100%;
    z-index: 3;

    @media (min-width: md) {
      padding: 0 lg;
    }

    ${variant === 'gray' &&
    css`
      background-color: nude-200;

      ${Item} {
        opacity: 1;
        color: dark-900;

        &.active,
        &:hover {
          @media (min-width: md) {
            opacity: 0.7;
          }
        }
      }
    `}
  `
)

export const MenuMobileDrawer = styled(WUIDrawer)`
  margin-top: ${`calc(${headerHeight} - 1px)`} !important;
  width: 100% !important;
  padding: lg;

  @media (min-width: md) {
    display: none;
  }
`
