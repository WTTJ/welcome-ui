import styled, { css } from '@xstyled/styled-components'
import { th, up } from '@xstyled/system'

export const Nav = styled.nav`
  ${th('docs.navigationMobile')};

  ${up(
    'md',
    css`
      ${th('docs.navigation')};
    `
  )};
`

export const Ul = styled.ul`
  margin: 0 0 xl;
  padding: 0;
  list-style: none;
`

export const Li = styled.li`
  padding: sm 0 0 xl;
`

const linkStyle = css`
  color: inherit;
  opacity: 0.7;
  text-decoration: none;
  transition: medium;

  &[aria-current='page'] {
    opacity: 1;
    font-weight: bold;
  }
`

const linkStyleHover = css`
  &:hover {
    opacity: 1;
  }
`

export const Main = styled.a`
  ${linkStyle};
  ${linkStyleHover};
  font-weight: bold;
`

export const MainTitle = styled.div`
  ${linkStyle};
  font-weight: bold;
`

export const Item = styled.a`
  ${linkStyle}
  ${linkStyleHover};
`
