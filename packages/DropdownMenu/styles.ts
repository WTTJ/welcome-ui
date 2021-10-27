import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { cardStyles } from '@welcome-ui/utils'
import { Box } from '@welcome-ui/box'

export const Inner = styled(Box)`
  ${cardStyles};
  ${th('dropdownMenu.inner')};
  overflow: hidden;
  z-index: 1;
  transition: opacity 200ms;

  &:focus {
    outline: none !important; /* important for firefox */
  }

  &[hidden] {
    display: none;
  }
`
