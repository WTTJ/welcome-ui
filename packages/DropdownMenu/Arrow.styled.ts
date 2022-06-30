import styled, { css, th } from '@xstyled/styled-components'
import { MenuArrow } from 'reakit/Menu'

export const Arrow = styled(MenuArrow)`
  display: flex;
  z-index: 2;
  color: ${th('defaultCards.backgroundColor')};

  #stroke {
    color: ${th('defaultCards.borderColor')};
  }
`

export const ArrowItem = styled.svgBox<{ $transform: string }>(
  ({ $transform }) => css`
    transform: ${$transform};
  `
)
