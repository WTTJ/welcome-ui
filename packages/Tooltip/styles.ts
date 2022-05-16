import styled, { css, system, th } from '@xstyled/styled-components'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { filterSystemProps } from '@welcome-ui/system'

export const Tooltip = styled(ReakitTooltip).withConfig({ shouldForwardProp: filterSystemProps })(
  () => css`
    ${th('tooltips')};
    ${system};
  `
)
