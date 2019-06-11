import styled, { css } from 'styled-components'
import { left, width } from '@xstyled/system'

import { get, getCss } from '../../theme/helpers'
import { system } from '../../utils/utils'

export const Tabs = styled.nav`
  width: 100%;
  overflow: auto;
  position: relative;
  ${system};
`

export const List = styled.ul`
  ${getCss('tabs.tabs')}
  display: flex;
`

export const Item = styled.button(
  props => css`
    border: 0;
    background: none;
    ${getCss('tabs.item.default')};
    ${props.active && getCss('tabs.item.active')};
    display: flex;
    align-items: center;
    flex: none;
    margin-right: ${get('space.lg')};
    padding-bottom: ${get('space.lg')};
    transition: ${get('transitions.medium')};
    text-transform: none;
    cursor: pointer;

    &:hover,
    &:focus {
      ${!props.active && getCss('tabs.item.focus')};
    }

    & > *:first-child {
      line-height: 1em;
    }

    & > *:nth-child(2) {
      margin-left: ${get('space.xs')};
    }
  `
)

export const ActiveBar = styled.span(
  () => css`
    ${getCss('tabs.activeBar')};
    position: absolute;
    ${width}
    ${left}
    bottom: 0;
    transition: ${get('transitions.medium')};
    transition-property: width, left;
  `
)
