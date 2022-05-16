import styled, { css, system, th } from '@xstyled/styled-components'

export const NavBar = styled.ul`
  display: inline-flex;
  margin: 0;
  padding: 0;
  list-style: none;
  ${system};

  li {
    margin-left: xl;

    &:first-child {
      margin-left: 0;
    }
  }
`

const activeItem = css`
  color: dark.900;

  @media (min-width: md) {
    color: light.900;
  }
`

export const Item = styled.a(
  ({ isActive }) => css`
    ${th('texts.subtitle1')};
    text-transform: uppercase;
    color: light.100;
    transition: medium;
    text-decoration: none;

    @media (min-width: md) {
      color: light.200;
    }

    ${isActive &&
    css`
      ${activeItem};
    `};

    &:hover {
      ${activeItem};
    }
  `
)
