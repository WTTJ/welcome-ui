import styled from '@xstyled/styled-components'

import { TOPNAV_HEIGHT } from '../constants'

export const TopNav = styled.headerBox`
  position: sticky;
  top: 0;
  background-color: neutral-10;
  z-index: 1;
`

export const TopNavList = styled.ul`
  padding: 0 lg;
  margin: 0;
  display: flex;
  align-items: center;
  overflow-x: auto;
  height: ${TOPNAV_HEIGHT};
  border-bottom: 1px solid;
  border-color: neutral-30;
`

export const TopNavListItem = styled.li`
  list-style: none;
  min-width: auto;
`

export const TopNavLink = styled.aBox`
  display: inline-flex;
  align-items: center;
  color: beige-70;
  padding: sm;
  border-radius: md;
  cursor: pointer;
  margin-right: sm;
  text-decoration: none;
  transition: background-color 300ms;
  white-space: nowrap;
  font-size: sm;

  &[aria-current='page'] {
    color: neutral-90;
    background-color: beige-30;
  }

  &:hover {
    color: beige-80;
    background-color: beige-20;
  }
`

export const TopNavMobileSection = styled.section`
  height: ${TOPNAV_HEIGHT};
  display: flex;
  align-items: center;
  background-color: beige-20;
  padding: 0 md;
`

export const MenuButton = styled.buttonBox`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border: none;
  border-radius: md;
  cursor: pointer;
  color: beige-70;
  background-color: inherit;
  transition:
    color 300ms,
    background-color 300ms;

  &:hover {
    color: beige-80;
    background-color: beige-30;
  }

  &:active {
    color: neutral-90;
  }
`
