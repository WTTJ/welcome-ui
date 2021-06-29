import styled from '@xstyled/styled-components'
import { Button } from '@welcome-ui/button'
import { system } from '@welcome-ui/system'
import { th } from '@xstyled/system'

export const CloseButton = styled(Button)`
  ${th('closeButton.default')};
  ${system};

  &:hover {
    ${th('closeButton.hover')};
  }

  &:focus {
    ${th('closeButton.focus')};
  }

  &:active {
    ${th('closeButton.active')};
  }
`
