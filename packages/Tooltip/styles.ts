import styled, { css, system, th } from '@xstyled/styled-components'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { filterSystemProps } from '@welcome-ui/system'

import { PlacementOptions, TooltipOptions } from './index'

export const Tooltip = styled(ReakitTooltip).withConfig({ shouldForwardProp: filterSystemProps })(
  () => css``
)
const transformDirection = {
  top: 'translate3d(0, -4px, 0)',
  right: 'translate3d(4px, 0, 0)',
  bottom: 'translate3d(0, 4px, 0)',
  left: 'translate3d(-4px, 0, 0)',
  auto: 'translate3d(0, 0, 0)',
}
type TransformDirectionKey = keyof typeof transformDirection

export const FadeIn = styled.div<{
  placement?: PlacementOptions
  fixed?: TooltipOptions['fixed']
}>`
  ${th('tooltips')};
  ${system};
  transition: opacity ${th.transition('medium')}, transform ${th.transition('medium')},
    visibility ${th.transition('medium')};
  visibility: hidden;
  opacity: 0;
  transform-origin: top center;
  transform: ${({ fixed, placement }) => {
    if (fixed) return 'translate3d(0, 0, 0)'
    const placementOption = placement?.split('-')[0] as TransformDirectionKey
    return transformDirection[placementOption]
  }};
  [data-enter] & {
    visibility: visible;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
