import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { filterComponent, system } from '@welcome-ui/system'

export const Tooltip = styled(filterComponent(ReakitTooltip))`
  ${th('tooltips')};
  ${system};
`
