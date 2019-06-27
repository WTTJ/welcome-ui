import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/'

export const Pagination = styled.nav(system)

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li`
  display: inline-block;
  padding: 0;
  margin: 0 xxs;
  ${p =>
    p.hidden &&
    css`
      display: none;
    `}
`

export const Dots = styled.span`
  ${th('paginations.default')};
  ${th('paginations.dots')}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const AbstractLink = styled.a`
  ${th('paginations.default')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: medium;
  transition-property: color, box-shadow;
  text-decoration: none;

  &:focus {
    outline: none;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
  }
`

export const ArrowLink = styled(AbstractLink)`
  ${th('paginations.arrow')};
  transition-property: color, box-shadow, border-color;
`

export const PageLink = styled(AbstractLink)`
  ${th('paginations.number')}
  ${p => p['aria-current'] && th('paginations.active')(p)}
`
