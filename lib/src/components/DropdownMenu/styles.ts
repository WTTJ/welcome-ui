import styled, { system, th } from '@xstyled/styled-components'

import { Box } from '../Box'

export const Inner = styled(Box)`
  ${th('cards.default')};
  ${th('dropdownMenu.inner')};
  z-index: 1;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  ${system};

  &[data-enter] {
    opacity: 1;
  }
`
