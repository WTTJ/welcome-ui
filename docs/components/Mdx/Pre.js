import styled, { css } from 'styled-components'

export const Pre = styled.pre(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    line-height: 1.5;
    font-family: ${theme.textsFontFamily.texts};

    > div {
      width: 100%;
      overflow-wrap: break-word;
      white-space: pre-wrap;
    }
  `
)
