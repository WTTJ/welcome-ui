import styled, { css, system, th } from '@xstyled/styled-components'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'

export const Pagination = styled.nav(system)

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li`
  display: inline-block;
  vertical-align: bottom;
  padding: 0;
  margin-right: sm;

  &:last-child {
    margin-right: 0;
  }
`

export const Dots = styled.span`
  ${th('paginations.default')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AbstractLink = styled.a`
  ${th('paginations.default')};
  ${th('paginations.item')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline: none !important; /* important for firefox */
    transition: none;
  }

  [${hideFocusRingsDataAttribute}] &:focus {
    box-shadow: none;
  }
`

export const ArrowLink = styled(AbstractLink)<{ disabled: boolean }>(
  props => css`
    ${props['aria-disabled'] && th('paginations.disabled')}
  `
)

export const PageLink = styled(AbstractLink)(
  props => css`
    ${props['aria-current'] && th('paginations.active')}
  `
)
