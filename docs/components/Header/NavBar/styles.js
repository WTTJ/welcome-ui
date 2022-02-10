import styled from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'

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

export const Item = styled.a`
  ${th('texts.subtitle1')};
  text-transform: uppercase;
  color: dark.100;
  transition: medium;
  text-decoration: none;

  &.active,
  &:hover {
    color: dark.900;

    @media (min-width: md) {
      color: light.900;
    }
  }
`
