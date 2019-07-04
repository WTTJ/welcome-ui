import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Tooltip as ReakitTooltip } from 'reakit'

import { filterProps, system } from '../../utils/'

export const Tooltip = styled(filterProps(ReakitTooltip))`
  ${th('tooltips')};
  padding: sm;
  font-size: body4;
  ${system};
`
