import styled, { th } from '@xstyled/styled-components'
import { Button } from '@welcome-ui/button'

export const CloseButton = styled(Button)`
  ${th('closeButton.default')};

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
