import styled, { css } from 'styled-components'

export const InlineCode = styled.code(
  ({ theme }) => css`
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors['sub-3']};
  `
)
