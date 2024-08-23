import styled, { css, system, th } from '@xstyled/styled-components'

export const Nav = styled.navBox(
  ({ isSubPage }: { isSubPage?: boolean }) => css`
    box-shadow: ${th('colors.dark-100')} 1px 0px 0px inset;
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

export const Link = styled.spanBox`
  display: block;
  color: dark-700;
  position: relative;
  transition: color ${th('transitions.medium')}, padding-left ${th('transitions.medium')};

  &:hover,
  &:focus {
    color: dark-900;
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
    color: dark-900;
    border-bottom-color: primary-500;

    &::before {
      background-color: ${th('colors.primary-500')};
    }
  }

  ${system}
`
