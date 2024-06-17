import styled, { css, th } from '@xstyled/styled-components'

export const Link = styled.a(
  ({ isNext }) => css`
    ${th('texts.h5')};
    display: flex;
    align-items: center;
    text-decoration: none;
    color: secondary-red;
    transition: medium;

    &:hover {
      ${!isNext &&
      css`
        padding-left: sm;
      `};

      ${isNext &&
      css`
        padding-right: sm;
      `};
    }
  `
)
