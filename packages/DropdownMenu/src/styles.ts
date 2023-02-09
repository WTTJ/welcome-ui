import styled, { system, th } from '@xstyled/styled-components'
import { cardStyles } from '@welcome-ui/utils'
import { Box } from '@welcome-ui/box'

export const Inner = styled(Box)`
  ${cardStyles};
  ${th('dropdownMenu.inner')};
  z-index: 1;
  transition: opacity 200ms;

  &:focus {
    outline: none !important; /* important for firefox */
  }

  &[hidden] {
    display: none;
  }

  ${system}
`
