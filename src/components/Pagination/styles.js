import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/utils'

const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: xxs;
  ${th('paginations.default')};

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
  list-style-type: none;
  padding: 0;
  margin: 0;
  ${system};
`

const Item = styled.button`
  border-radius: 50%;
  transition: medium;
  transition-property: none;
  cursor: pointer;
  ${baseStyle};

  &:hover {
    transition-property: color;
  }
`

export const Dots = styled.div`
  ${th('paginations.dots')}
  ${baseStyle};
  margin-left: 0;
  width: auto;
`

export const ArrowItemLeft = styled(Item)`
  ${th('paginations.arrow')}
  transition-property: border;
`

export const ArrowItemRight = styled(ArrowItemLeft)`
  margin-left: 0;
`

export const PageItem = styled(Item)`
  ${th('paginations.number')}
  ${props => props.active && th('paginations.active')};
`
