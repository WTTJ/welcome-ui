import styled, { css, system, th } from '@xstyled/styled-components'
import { Tab as AriakitTab, TabState } from 'ariakit/tab'

import { ActiveBarStateReturn } from './ActiveBar'
import { Size } from './TabList'

export const TabList = styled.divBox<{ $size: Size; $orientation: TabState['orientation'] }>(
  ({ $orientation, $size }) => css`
    position: relative;
    width: 100%;
    overflow-x: auto;
    display: flex;
    border: 0;

    color: red;

    ${th('tabs.tabsBorder.horizontal')};

    ${$orientation === 'vertical' &&
    css`
      flex-direction: column;
      ${th('tabs.tabsBorder.vertical')};
    `}

    & > :not(:last-child) {
      ${th(`tabs.size.${$size}`)}
    }

    ${system}
  `
)

export const Tab = styled.span`
  ${th('tabs.item.default')};
  display: flex;
  align-items: center;
  flex: none;
  padding: md 0;
  transition: medium;
  text-transform: none;
  cursor: pointer;
  gap: sm;

  & > svg,
  img {
    ${th('tabs.icon')};
  }

  & > span {
    ${th('tabs.badge')};
  }
`

/** reset default button to render him transparent */
export const TabButton = styled(AriakitTab)`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;

  &:focus {
    &:not([aria-selected='true']) {
      ${Tab} {
        ${th('tabs.item.focus')};
      }
    }
  }

  &[aria-selected='true'] {
    ${Tab} {
      ${th('tabs.item.active')}
    }
  }

  &[aria-disabled='true'] {
    ${Tab} {
      ${th('tabs.item.disabled')};
      cursor: auto;
    }
  }

  &:hover:not([aria-selected='true']):not([aria-disabled='true']) {
    ${Tab} {
      ${th('tabs.item.focus')};
    }
  }
`

export const TabPanel = styled.div<Pick<TabState, 'orientation'>>(
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
