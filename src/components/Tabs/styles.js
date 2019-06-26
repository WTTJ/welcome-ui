import styled, { css } from '@xstyled/styled-components'
import { left, th, width } from '@xstyled/system'
import { Tab, TabList, TabPanel } from 'reakit/Tab'

import { system } from '../../utils/'

export const Tabs = styled.section`
  ${system};
`
export const List = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`

export const ListContent = styled(TabList)`
  border: 0;
  ${th('tabs.tabs')}
  position: relative;
  display: flex;
`

export const Item = styled(Tab)`
  outline: none;
  border: 0;
  background: none;
  ${th('tabs.item.default')};
  display: flex;
  align-items: center;
  flex: none;
  margin-right: lg;
  padding-bottom: lg;
  padding-top: lg;
  transition: medium;
  text-transform: none;

  a {
    color: inherit;
  }

  &[aria-selected='true'] {
    ${th('tabs.item.active')};
  }

  &:hover:not([aria-selected='true']):not([aria-disabled='true']) {
    ${th('tabs.item.focus')};
    cursor: pointer;
  }

  &[aria-disabled='true'] {
    ${th('tabs.item.disabled')};
  }

  & > *:first-child {
    line-height: 1em;
  }

  & > *:nth-child(2) {
    margin-left: xs;
  }
`

export const Panel = styled(TabPanel)`
  ${th('tabs.panel')};
`

export const ActiveBar = styled.span(
  () => css`
    ${th('tabs.activeBar')};
    position: absolute;
    ${width}
    ${left}
    transition: medium;
    transition-property: width, left;
  `
)
