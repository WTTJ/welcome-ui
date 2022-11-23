import styled, { css } from 'styled-components'
import { system } from '@welcome-ui/system'

export const NavBar = styled.ul(
  ({ theme }) => css`
    display: inline-flex;
    margin: 0;
    padding: 0;
    list-style: none;
    ${system};

    li {
      margin-left: ${theme.space.lg};

      &:first-child {
        margin-left: 0;
      }
    }
  `
)

const activeItem = css`
  opacity: 1;
  color: ${({ theme }) => theme.colors['dark-900']};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    opacity: 1;
    color: white;
  }
`

export const Item = styled.a(
  ({ isActive, theme }) => css`
    ${theme.texts['subtitle-md']};
    text-transform: uppercase;
    color: ${theme.colors['dark-500']};
    transition: ${theme.transitions.medium};
    text-decoration: none;

    @media (min-width: ${theme.breakpoints.md}px) {
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
