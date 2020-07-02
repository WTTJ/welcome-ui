import styled, { css } from '@xstyled/styled-components'
import { componentSystem, shouldForwardProp, system } from '@welcome-ui/system'
import { Radio as ReakitRadio } from 'reakit/Radio'

export const Radio = styled(ReakitRadio).withConfig({ shouldForwardProp })(
  ({ connected }) => css`
    display: none;
    ${connected ? componentSystem : system};
  `
)
