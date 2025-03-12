import styled, { css, system, th } from '@xstyled/styled-components'

export const Nav = styled.navBox<{ isSubPage?: boolean }>(
  ({ isSubPage }) => css`
    box-shadow: ${th('colors.neutral-30')} 1px 0px 0px inset;
    position: sticky;
    top: calc(4.375rem + 3rem);
    max-height: calc(100vh - 12rem);
    overflow-y: auto;
    z-index: 1;

    ${isSubPage &&
    css`
      top: calc(4.375rem + 7rem);
    `};
  `
)

export const Link = styled.span`
  display: block;
  color: neutral-70;
  position: relative;
  transition:
    color ${th('transitions.medium')},
    padding-left ${th('transitions.medium')};

  &:hover,
  &:focus {
    color: neutral-90;
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
    color: neutral-90;
    border-bottom-color: primary-40;

    &::before {
      background-color: ${th('colors.primary-40')};
    }
  }

  ${system}
`
