import styled from '@xstyled/styled-components'
import { createSystemComponent, th } from '@xstyled/system'
import { Tooltip as ReakitTooltip } from 'reakit'

import { createElement, system } from '../../utils/'

export const Tooltip = styled(createSystemComponent(createElement, ReakitTooltip, system))`
  ${th('tooltips')};
  padding: sm;
  font-size: body4;
  ${system};
`
