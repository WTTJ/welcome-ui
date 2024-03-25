import styled, { system, th } from '@wttj/xstyled-styled-components'
import { cardStyles } from '@welcome-ui/utils'
import { Box } from '@welcome-ui/box'

export const Inner = styled(Box)`
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
