import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

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
  transition-property: color;
  text-decoration: none;

  &:focus {
    outline: none !important; /* important for firefox */
    transition: none;
  }
`

export const ArrowLink = styled(AbstractLink)`
  ${th('paginations.arrow')};
`

export const PageLink = styled(AbstractLink)`
  ${th('paginations.number')}
  ${p => p['aria-current'] && th('paginations.active')(p)}
`
