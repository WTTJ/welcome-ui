import styled, { th } from '@xstyled/styled-components'

export const Inner = styled.divBox`
  ${th('cards.default')};
  ${th('dropdownMenu.inner')};
  z-index: 1;
  opacity: 0;
  transition: opacity 150ms ease-in-out;

  &[data-enter] {
    opacity: 1;
  }
`
