import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { system } from '../../utils/utils'

const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${get('space.xxs')};
  ${getCss('paginations.default')};

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
`

export const Pagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${system};
`

const Item = styled.button`
  border-radius: 50%;
  transition: ${get('transitions.medium')};
  transition-property: none;
  cursor: pointer;
  ${baseStyle};

  &:hover {
    transition-property: color;
  }
`

export const Dots = styled.div`
  ${baseStyle};
  margin-left: 0;
  width: auto;
`

export const ArrowItemLeft = styled(Item)`
  ${getCss('paginations.arrow')}
  transition-property: border;
`

export const ArrowItemRight = styled(ArrowItemLeft)`
  margin-left: 0;
`

export const PageItem = styled(Item)`
  ${getCss('paginations.number')}
  ${props => props.active && getCss('paginations.active')};
`
