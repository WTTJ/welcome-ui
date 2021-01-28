import styled, { css } from '@xstyled/styled-components'
import { th, up } from '@xstyled/system'

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Li = styled.li`
  a {
    display: block;
    width: 90%;
  }
`

export const Main = styled.a`
  font-weight: bold;
`

export const MainTitle = styled.div`
  ${th('docs.navigationMobile.main')};
  font-size: body3;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: xxl;
  margin-bottom: sm;

  ${up(
    'md',
    css`
      ${th('docs.navigation.main')};
    `
  )};
`

export const Item = styled.a`
  ${th('docs.navigationMobile.item')};
  text-decoration: none;
  padding: xxs xxs xxs xl;
  margin-bottom: xxs;
  transition: medium;

  ${up(
    'md',
    css`
      ${th('docs.navigation.item')};
    `
  )};
`
