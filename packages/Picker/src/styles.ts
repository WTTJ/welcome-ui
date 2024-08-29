import styled, { css, system } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import * as Ariakit from '@ariakit/react'

export const Radio = styled(Ariakit.Radio).withConfig({ shouldForwardProp })(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    ${system};
  `
)
