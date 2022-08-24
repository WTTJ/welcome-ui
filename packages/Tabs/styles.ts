import styled, { css, system, th } from '@xstyled/styled-components'
import { TabStateReturn } from 'reakit/Tab'

import { ActiveBarStateReturn } from './ActiveBar'
import { SizeOptions } from './TabList'

export const TabList = styled.div<{ size: SizeOptions }>(
  ({ size }) => css`
    position: relative;
    width: 100%;
    overflow-x: auto;
    display: flex;
    border: 0;

    &[aria-orientation='vertical'] {
      flex-direction: column;
      ${th('tabs.tabsBorder.vertical')};
    }

    ${th('tabs.tabsBorder.horizontal')};

    & > :not(:last-child) {
      ${th(`tabs.size.${size}`)}
    }
    ${system};
  `
)

export const Tab = styled.button`
  border: 0;
  background: none;
  ${th('tabs.item.default')};
  display: flex;
  align-items: center;
  flex: none;
  padding: md 0;
  transition: medium;
  text-transform: none;
  cursor: pointer;
  gap: sm;

  &:focus {
    outline: none !important; /* important for firefox */
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

  & > svg,
  img {
    ${th('tabs.icon')};
  }

  & > span {
    ${th('tabs.badge')};
  }
`

export const TabPanel = styled.div<Pick<TabStateReturn, 'orientation'>>(
  ({ orientation }) => css`
    ${orientation === 'vertical' ? th('tabs.panel.vertical') : th('tabs.panel.horizontal')};
  `
)

const activeBarHorizontalStyles = ({ offset = 0, size = 0 }) => css`
  ${th('tabs.activeBar.horizontal')};
  left: 0;
  bottom: 0;
  width: ${size}px;
  transform: translateX(${offset}px);
`

const activeBarVerticalStyles = ({ offset = 0, size = 0 }) => css`
  ${th('tabs.activeBar.vertical')};
  right: 0;
  top: 0;
  height: ${size}px;
  transform: translateY(${offset}px);
`

export const ActiveBar = styled.span<ActiveBarStateReturn>(
  ({ orientation, ...rest }) => css`
    position: absolute;
    ${orientation === 'vertical' ? activeBarVerticalStyles(rest) : activeBarHorizontalStyles(rest)}
    will-change: width, transform;
    transition: medium;
    transition-property: transform, width;
  `
)
