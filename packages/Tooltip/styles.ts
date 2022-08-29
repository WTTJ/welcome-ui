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
}
type TransformDirectionKey = keyof typeof transformDirection

export const FadeIn = styled.div<{
  placement?: PlacementOptions
  fixed?: TooltipOptions['fixed']
}>`
  ${th('tooltips')};
  ${system};
  background-color: rgba(33, 33, 33, 0.9);
  padding: ${th('space.sm')};
  padding-bottom: ${th('space.xl')};
  border-radius: ${th('radii.sm')};
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out,
    visibility 200ms ease-in-out 50ms;
  visibility: hidden;
  opacity: 0;
  transform-origin: top center;
  transform: ${({ fixed, placement }) => {
    const placementOption = placement?.split('-')[0] as TransformDirectionKey
    return fixed ? 'translate3d(0, 0, 0)' : transformDirection[placementOption]
  }};
  [data-enter] & {
    visibility: visible;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
