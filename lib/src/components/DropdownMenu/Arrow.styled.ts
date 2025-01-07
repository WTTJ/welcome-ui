import styled, { css, th } from '@xstyled/styled-components'

export const Arrow = styled.divBox`
  display: flex;
  z-index: 2;
  color: ${th('defaultCards.backgroundColor')};
  stroke-width: 0 !important;

  #stroke {
    color: ${th('defaultCards.borderColor')};
  }
`

export const ArrowItem = styled.svgBox<{ $transform: string }>(
  ({ $transform }) => css`
    transform: ${$transform};
  `
)
