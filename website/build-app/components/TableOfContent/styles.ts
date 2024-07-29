import styled, { css, system, th } from '@xstyled/styled-components'
import NextLink from 'next/link'

export const Nav = styled.nav(
  ({ isSubPage }: { isSubPage?: boolean }) => css`
    box-shadow: ${th('colors.neutral-20')} 1px 0px 0px inset;
    position: sticky;
    top: calc(4.375rem + 3rem);
    max-height: calc(100vh - 12rem);
    overflow-y: scroll;
    z-index: 1;

    ${isSubPage &&
    css`
      top: calc(4.375rem + 7rem);
    `};
  `
)

export const Link = styled(NextLink)`
  display: block;
  color: neutral-70;
  position: relative;
  transition: color ${th('transitions.medium')}, padding-left ${th('transitions.medium')};

  &:hover,
  &:focus {
    color: neutral-black;
  }

  &::before {
    content: ' ';
    width: 2px;
    height: calc(100% - 1px);
    position: absolute;
    left: 0;
    background-color: transparent;
    transition: background-color ${th('transitions.medium')};
  }

  &[aria-current='page'] {
    color: neutral-black;
    border-bottom-color: primary-40;

    &::before {
      background-color: ${th('colors.primary-40')};
    }
  }

  ${system}
`
