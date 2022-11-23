import styled, { css } from 'styled-components'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { system } from '@welcome-ui/system'

import { PlacementOptions } from './index'

export const Tooltip = styled(ReakitTooltip)``

const transformDirection = {
  top: 'translate3d(0, -4px, 0)',
  right: 'translate3d(4px, 0, 0)',
  bottom: 'translate3d(0, 4px, 0)',
  left: 'translate3d(-4px, 0, 0)',
  auto: 'translate3d(0, 0, 0)',
}
type TransformDirectionKey = keyof typeof transformDirection

const getFadeInDirection = (placement: string) => {
  const position = placement?.split('-')
  const directionKey = position[0] as TransformDirectionKey
  if (position.length < 2) {
    return transformDirection[directionKey]
  } else {
    let xy = '0, 0'
    if (placement == 'right-end' || placement == 'bottom-end') xy = '4px, 4px'
    if (placement == 'right-start' || placement == 'top-end') xy = '4px, -4px'
    if (placement == 'left-end' || placement == 'bottom-start') xy = '-4px, 4px'
    if (placement == 'left-start' || placement == 'top-start') xy = '-4px, -4px'
    return `translate3d(${xy}, 0)`
  }
}

type FadeInProps = {
  placement?: PlacementOptions
  fixed?: boolean
}

export const FadeIn = styled.div<FadeInProps>(
  ({ fixed, placement, theme }) => css`
    ${theme.tooltips};
    ${system};
    transition: opacity ${theme.transitions.medium}, transform ${theme.transitions.medium},
      visibility ${theme.transitions.medium};
    visibility: hidden;
    opacity: 0;
    transform-origin: top center;
    transform: ${!fixed && getFadeInDirection(placement)};

    [data-enter] & {
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `
)
