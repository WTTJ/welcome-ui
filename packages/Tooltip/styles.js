import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { system } from '@welcome-ui/system'
import { filterSystemProps } from '@welcome-ui/system'

export const Tooltip = styled(ReakitTooltip).withConfig({ shouldForwardProp: filterSystemProps })(
  () => css`
    ${th('tooltips')};
    ${system};
  `
)
