import styled, { css, th } from '@wttj/xstyled-styled-components'

export const Link = styled.aBox(
  ({ isNext }) => css`
    ${th('texts.h5')};
    display: flex;
    align-items: center;
    text-decoration: none;
    color: sub-3;
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
