import styled, { css, system, th } from '@wttj/xstyled-styled-components'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'

export const Pagination = styled.navBox(system)

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

export const Dots = styled.spanBox`
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
      color: nude-700;
      background-color: nude-400;
    `}
  `
)

export const PageLink = styled.aBox(
  props => css`
    ${abstractLinkStyle};
    ${props['aria-current'] && th('paginations.active')}
  `
)
