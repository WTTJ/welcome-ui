import styled, { css } from 'styled-components'
import { left, width } from 'styled-system'

import { get, getCss } from '../../theme/helpers'
import { getTransitions } from '../../utils/transitions'

export const Tabs = styled.nav`
  width: 100%;
  overflow: auto;
  position: relative;
`

export const List = styled.ul`
  ${getCss('tabs.tabs')}
  display: flex;
`

export const Item = styled.li(
  props => css`
    ${getCss('tabs.item.default')};
    ${props.active && getCss('tabs.item.active')};
    display: flex;
    align-items: center;
    flex: none;
    margin-right: ${get('space.lg')};
    padding-bottom: ${get('space.lg')};
    text-transform: none;
    cursor: pointer;

    &:hover,
    &:focus {
      ${!props.active && getCss('tabs.item.focus')};
    }

    a {
      color: inherit;
      font-size: inherit;
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
    transition: ${getTransitions(['width', 'left'], 'lg')};
  `
)
