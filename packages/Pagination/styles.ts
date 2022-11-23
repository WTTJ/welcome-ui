import styled, { css } from 'styled-components'
import { system } from '@welcome-ui/system'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'

export const Pagination = styled.nav(system)

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li(
  ({ theme }) => css`
    display: inline-block;
    vertical-align: bottom;
    padding: 0;
    margin-right: ${theme.space.sm};

    &:last-child {
      margin-right: 0;
    }
  `
)

export const Dots = styled.span(
  ({ theme }) => css`
    ${theme.paginations.default};
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

export const AbstractLink = styled.a(
  ({ theme }) => css`
    ${theme.paginations.default};
    ${theme.paginations.item};
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
)

export const ArrowLink = styled(AbstractLink)<{ isDisabled: boolean }>(
  ({ isDisabled, theme }) => css`
    ${isDisabled &&
    css`
      color: ${theme.colors['nude-700']};
      background-color: ${theme.colors['nude-400']};
    `}
  `
)

export const PageLink = styled(AbstractLink)(
  ({ theme, ...props }) => css`
    ${props['aria-current'] && theme.paginations.active}
  `
)
