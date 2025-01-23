import styled, { th } from '@xstyled/styled-components'

import { Button } from '@/Button'

export const CloseButton = styled(Button)`
  & > svg:only-child {
    width: ${th('space.md')};
    height: ${th('space.md')};
  }
`
