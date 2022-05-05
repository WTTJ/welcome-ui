import styled, { css } from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { filterSystemProps } from '@welcome-ui/system'

export const Tooltip = styled(ReakitTooltip).withConfig({ shouldForwardProp: filterSystemProps })(
  () => css`
    ${th('tooltips')};
    ${system};
  `
)
