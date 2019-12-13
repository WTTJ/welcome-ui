import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../Core/utils/system'

export const TabList = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
  display: flex;
  border: 0;
  ${system};

  &::before {
    content: '';
    position: absolute;
    ${th('tabs.tabsBorder')};
  }
`

export const Tab = styled.button`
  border: 0;
  background: none;
  ${th('tabs.item.default')};
  display: flex;
  align-items: center;
  flex: none;
  margin-right: xl;
  padding: lg 0;
  transition: medium;
  text-transform: none;
  cursor: pointer;

  &:focus {
    outline: none;
    &:not([aria-selected='true']) {
      ${th('tabs.item.focus')};
    }
  }

  &[aria-selected='true'] {
    ${th('tabs.item.active')};
  }

  &[aria-disabled='true'] {
    ${th('tabs.item.disabled')};
    cursor: auto;
  }

  &:hover:not([aria-selected='true']):not([aria-disabled='true']) {
    ${th('tabs.item.focus')};
  }
`

export const TabPanel = styled.div`
  ${th('tabs.panel')};
`

export const ActiveBar = styled.span(
  ({ left = 0, width = 0 }) => css`
    ${th('tabs.activeBar')};
    position: absolute;
    left: 0;
    width: ${`${width}px`};
    transform: translateX(${left}px);
    will-change: width, transform;
    transition: medium;
    transition-property: transform, width;
  `
)
