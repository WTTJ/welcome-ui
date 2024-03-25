import styled, { system, th } from '@wttj/xstyled-styled-components'
import { cardStyles } from '@welcome-ui/utils'

export const Inner = styled.divBox`
  ${cardStyles};
  ${th('dropdownMenu.inner')};
  z-index: 1;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  ${system};

  &[data-enter] {
    opacity: 1;
  }
`
