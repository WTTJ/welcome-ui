import styled, { css, DefaultTheme } from 'styled-components'
import { TabStateReturn } from 'reakit/Tab'
import { system } from '@welcome-ui/system'

import { ActiveBarStateReturn } from './ActiveBar'

export const TabList = styled.div<{ size: keyof DefaultTheme['tabs']['size'] }>(
  ({ size, theme }) => css`
    position: relative;
    width: 100%;
    overflow-x: auto;
    display: flex;
    border: 0;

    &[aria-orientation='vertical'] {
      flex-direction: column;
      ${theme.tabs.tabsBorder.vertical};
    }

    ${theme.tabs.tabsBorder.horizontal};

    & > :not(:last-child) {
      ${theme.tabs.size[size]}
    }
    ${system};
  `
)

export const Tab = styled.button(
  ({ theme }) => css`
    border: 0;
    background: none;
    ${theme.tabs.item.default};
    display: flex;
    align-items: center;
    flex: none;
    padding: ${theme.space.md} 0;
    transition: ${theme.transitions.medium};
    text-transform: none;
    cursor: pointer;
    gap: ${theme.space.sm};

    &:focus {
      outline: none !important; /* important for firefox */
      &:not([aria-selected='true']) {
        ${theme.tabs.item.focus};
      }
    }

    &[aria-selected='true'] {
      ${theme.tabs.item.active};
    }

    &[aria-disabled='true'] {
      ${theme.tabs.item.disabled};
      cursor: auto;
    }

    &:hover:not([aria-selected='true']):not([aria-disabled='true']) {
      ${theme.tabs.item.focus};
    }

    & > svg,
    img {
      ${theme.tabs.icon};
    }

    & > span {
      ${theme.tabs.badge};
    }
  `
)

export const TabPanel = styled.div<Pick<TabStateReturn, 'orientation'>>(
  ({ orientation, theme }) => css`
    ${orientation === 'vertical' ? theme.tabs.panel.vertical : theme.tabs.panel.horizontal};
  `
)

const activeBarHorizontalStyles = ({ offset = 0, size = 0 }) => css`
  ${({ theme }) => theme.tabs.activeBar.horizontal};
  left: 0;
  bottom: 0;
  width: ${size}px;
  transform: translateX(${offset}px);
`

const activeBarVerticalStyles = ({ offset = 0, size = 0 }) => css`
  ${({ theme }) => theme.tabs.activeBar.vertical};
  right: 0;
  top: 0;
  height: ${size}px;
  transform: translateY(${offset}px);
`

export const ActiveBar = styled.span<ActiveBarStateReturn>(
  ({ orientation, theme, ...rest }) => css`
    position: absolute;
    ${orientation === 'vertical' ? activeBarVerticalStyles(rest) : activeBarHorizontalStyles(rest)}
    will-change: width, transform;
    transition: ${theme.transitions.medium};
    transition-property: transform, width;
  `
)
