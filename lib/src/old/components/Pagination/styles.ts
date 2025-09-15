import styled, { css, th } from '@xstyled/styled-components'

import { hideFocusRingsDataAttribute } from '@old/utils'

export const Pagination = styled.navBox``

export const List = styled.ulBox`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.liBox`
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

export const abstractLinkStyle = css`
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

export const ArrowLink = styled.aBox(
  props => css`
    ${abstractLinkStyle};
    ${props['aria-disabled'] &&
    css`
      color: beige-70;
      background-color: beige-40;
    `}
  `
)

export const PageLink = styled.aBox(
  props => css`
    ${abstractLinkStyle};
    ${props['aria-current'] && th('paginations.active')}
  `
)
