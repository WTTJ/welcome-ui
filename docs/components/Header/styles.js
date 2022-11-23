import styled, { css } from 'styled-components'
import { Drawer as WUIDrawer } from '@welcome-ui/drawer'

import { Item } from './NavBar/styles'

export const headerHeight = '3.75rem' // 60

export const Header = styled.header(
  ({ variant = 'black', theme }) => css`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${headerHeight};
    background-color: black;
    font-size: ${theme.fontSizes.md};
    padding: 0 ${theme.space.md};
    top: 0;
    width: 100%;
    z-index: 2;

    @media (min-width: ${theme.breakpoints.md}px) {
      padding: 0 ${theme.space.lg};
    }

    ${variant === 'gray' &&
    css`
      background-color: ${theme.colors['nude-200']};

      ${Item} {
        opacity: 1;
        color: ${theme.colors['dark-900']};

        &.active,
        &:hover {
          @media (min-width: ${theme.breakpoints.md}px) {
            opacity: 0.7;
          }
        }
      }
    `}
  `
)

export const MenuMobileDrawer = styled(WUIDrawer)(
  ({ theme }) => css`
    top: ${`calc(${headerHeight} - 1px)`} !important;
    width: 100% !important;
    padding: ${theme.space.lg};

    @media (min-width: ${theme.breakpoints.md}px) {
      display: none;
    }
  `
)
