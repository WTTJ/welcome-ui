import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Tooltip as ReakitTooltip } from 'reakit'

import { filterComponent, system } from '../../utils/'

export const Tooltip = styled(filterComponent(ReakitTooltip))`
  ${th('tooltips')};
  padding: sm;
  font-size: body4;
  ${system};
`
