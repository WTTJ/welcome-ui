import styled, { system } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'

import { shouldForwardProp } from '@/System'

export const Radio = styled(Ariakit.Radio).withConfig({ shouldForwardProp })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  ${system};
`
