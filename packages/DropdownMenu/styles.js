import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

export const Inner = styled.box`
  ${th('dropdownMenu.inner')};
  overflow: hidden;
  z-index: 1;
  transition: opacity 200ms;

  &:focus {
    outline: none;
  }

  &[hidden] {
    display: none;
  }

  ${system}
`
