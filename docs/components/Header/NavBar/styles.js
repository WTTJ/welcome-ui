import styled, { css, system, th } from '@xstyled/styled-components'

export const NavBar = styled.ul`
  display: inline-flex;
  margin: 0;
  padding: 0;
  list-style: none;
  ${system};

  li {
    margin-left: lg;

    &:first-child {
      margin-left: 0;
    }
  }
`

const activeItem = css`
  opacity: 1;
  color: neutral-black;

  @media (min-width: md) {
    opacity: 1;
    color: white;
  }
`

export const Item = styled.a(
  ({ isActive }) => css`
    ${th('texts.subtitle-md')};
    text-transform: uppercase;
    color: dark-500;
    transition: medium;
    text-decoration: none;

    @media (min-width: md) {
      color: white;
      opacity: 0.7;
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
