import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'
import { cardStyles } from '@welcome-ui/utils'

export const Inner = styled.box`
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

  ${system}
`
