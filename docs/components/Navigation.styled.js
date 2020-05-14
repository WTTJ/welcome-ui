import styled, { css } from '@xstyled/styled-components'

export const Nav = styled.nav``

export const Ul = styled.ul`
  margin: 0 0 xl;
  padding: 0;
  list-style: none;
`

export const Li = styled.li`
  padding: sm 0 0 xl;
`

const linkStyle = css`
  color: light.900;
  opacity: 0.7;
  text-decoration: none;
  transition: medium;

  &:hover,
  &[aria-current='page'] {
    opacity: 1;
  }

  &[aria-current='page'] {
    font-weight: bold;
  }
`

export const Main = styled.a`
  ${linkStyle}
  font-weight: bold;
`

export const Item = styled.a`
  ${linkStyle}
`
