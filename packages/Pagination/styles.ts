import styled, { css } from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'

export const Pagination = styled.nav(system)

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li(
  ({ hidden }) => css`
    display: inline-block;
    vertical-align: bottom;
    padding: 0;
    margin-right: xxs;

    &:last-child {
      margin-right: 0;
    }

    ${hidden &&
    css`
      display: none;
    `}
  `
)

export const Dots = styled.span`
  ${th('paginations.default')};
  ${th('paginations.dots')}
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AbstractLink = styled.a`
  ${th('paginations.default')};
  ${th('paginations.item')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: medium;
  text-decoration: none;

  &:focus {
    outline: none !important; /* important for firefox */
    transition: none;
  }
`

export const PageLink = styled(AbstractLink)(
  props => css`
    ${th('paginations.number')}

    [${hideFocusRingsDataAttribute}] &:focus {
      box-shadow: none;
    }

    ${props['aria-current'] && th('paginations.active')}
  `
)
