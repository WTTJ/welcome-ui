import styled, { system } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { Radio as ReakitRadio } from 'reakit/Radio'

export const Radio = styled(ReakitRadio).withConfig({ shouldForwardProp })`
  display: none;
  ${system};
`
