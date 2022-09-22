import styled, { css, system, th } from '@xstyled/styled-components'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { filterSystemProps } from '@welcome-ui/system'

import { PlacementOptions } from './index'

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

const getDirection = (placement: string) => {
  const position = placement?.split('-')
  const directionKey = position[0] as TransformDirectionKey

  if (position.length < 2) {
    return transformDirection[directionKey]
  } else {
    let xy = '0, 0'
    if (placement == 'right-end' || placement == 'bottom-end') xy = '4px, 4px'
    if (placement == 'right-start' || placement == 'top-end') xy = '4px, -4px'
    if (placement == 'left-start' || placement == 'bottom-start') xy = '-4px, 4px'
    if (placement == 'left-end' || placement == 'top-start') xy = '-4px, -4px'
    return `translate3d(${xy}, 0)`
  }
}

export const FadeIn = styled.div<{
  placement?: PlacementOptions
  fixed?: boolean
}>`
  ${th('tooltips')};
  ${system};
  transition: opacity ${th.transition('medium')}, transform ${th.transition('medium')},
    visibility ${th.transition('medium')};
  visibility: hidden;
  opacity: 0;
  transform-origin: top center;
  transform: ${({ fixed, placement }) => {
    if (!fixed) return
    return getDirection(placement)
    // return transformDirection[placementOption]
  }};
  [data-enter] & {
    visibility: visible;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
