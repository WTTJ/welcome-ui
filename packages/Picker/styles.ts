import styled from '@xstyled/styled-components'
import { system } from '@xstyled/system'
import { shouldForwardProp } from '@welcome-ui/system'
import { Radio as ReakitRadio } from 'reakit/Radio'

export const Radio = styled(ReakitRadio).withConfig({ shouldForwardProp })`
  display: none;
  ${system};
`
