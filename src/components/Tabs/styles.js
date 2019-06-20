import styled, { css } from '@xstyled/styled-components'
import { left, th, width } from '@xstyled/system'

import { system } from '../../utils/utils'

export const Tabs = styled.nav`
  position: relative;
  width: 100%;
  overflow: auto;
  ${system};
`

export const List = styled.ul`
  ${th('tabs.tabs')}
  display: flex;
  margin: 0;
  list-style-type: none;
`

export const Item = styled.button(
  props => css`
    border: 0;
    background: none;
    ${th('tabs.item.default')};
    ${props.active && th('tabs.item.active')};
    display: flex;
    align-items: center;
    flex: none;
    margin-right: lg;
    padding-bottom: lg;
    transition: medium;
    text-transform: none;
    cursor: pointer;

    &:hover,
    &:focus {
      ${!props.active && th('tabs.item.focus')};
    }

    & > *:first-child {
      line-height: 1em;
    }

    & > *:nth-child(2) {
      margin-left: xs;
    }
  `
)

export const ActiveBar = styled.span(
  () => css`
    ${th('tabs.activeBar')};
    position: absolute;
    ${width}
    ${left}
    bottom: 0;
    transition: medium;
    transition-property: width, left;
  `
)
