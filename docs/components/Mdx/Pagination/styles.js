import styled, { css } from 'styled-components'

export const Link = styled.a(
  ({ isNext, theme }) => css`
    ${theme.texts.h5};
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors['sub-3']};
    transition: ${theme.transitions.medium};

    &:hover {
      ${!isNext &&
      css`
        padding-left: ${theme.space.sm};
      `};

      ${isNext &&
      css`
        padding-right: ${theme.space.sm};
      `};
    }
  `
)
