import styled from '@xstyled/styled-components'
import { Drawer as WUIDrawer } from '@welcome-ui/drawer'

export const headerHeight = '3.75rem' // 60

export const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${headerHeight};
  background-color: dark.800;
  font-size: body2;
  padding: 0 sm;
  top: 0;
  width: 100%;
  z-index: 1;

  @media (min-width: md) {
    padding: 0 xl;
  }
`

// best hack ever 🙈 need to fix drawer and modal for mobile scrolling
export const MenuMobileDrawer = styled(WUIDrawer)`
  top: ${`calc(${headerHeight} - 1px)`} !important;
  width: 100% !important;
  overflow: scroll;
  padding: xl;

  @media (min-width: md) {
    display: none;
  }
`
