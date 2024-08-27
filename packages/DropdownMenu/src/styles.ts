import styled, { th } from '@xstyled/styled-components'
import { cardStyles } from '@welcome-ui/utils'

export const Inner = styled.box`
  ${cardStyles};
  ${th('dropdownMenu.inner')};
  z-index: 1;
  opacity: 0;
  transition: opacity 150ms ease-in-out;

  &[data-enter] {
    opacity: 1;
  }
`
