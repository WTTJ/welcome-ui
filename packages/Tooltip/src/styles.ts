import styled, { css, system, th } from '@xstyled/styled-components'

import { TooltipProps } from './index'

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

const fadeInStyle = css`
  visibility: visible;
  opacity: 1;
  transform: translate3d(0, 0, 0);
`

type FadeIn = {
  fixed?: boolean
  placement?: TooltipProps['placement']
  popoverHeight: number
  withArrow?: boolean
}

const arrowSize = 12
const arrowSpacer = arrowSize * 1.5

const getXPosition = (placement: string) => {
  if (placement.includes('start')) return arrowSpacer
  if (placement.includes('end')) return `calc(100% - ${arrowSpacer + 'px'})`
  return '50%'
}

const getYPosition = (placement: string, popoverHeight: number) => {
  //To avoid offsetting the arrow outside its parent, we check that the sizer is not bigger than the tooltip size
  const isPopoverSmall = popoverHeight - arrowSpacer < arrowSize

  if (placement.includes('end')) {
    return isPopoverSmall ? `${arrowSize}px` : `calc(100% - ${arrowSpacer}px)`
  }
  if (placement.includes('start')) {
    return isPopoverSmall ? `${arrowSize}px` : `${arrowSpacer}px`
  }
  return '50%'
}

export const FadeIn = styled.divBox<FadeIn>(
  ({ fixed, placement, popoverHeight, withArrow }) => css`
    ${th('tooltips')};
    ${system};
    transition:
      opacity ${th.transition('medium')},
      transform ${th.transition('medium')},
      visibility ${th.transition('medium')};
    visibility: hidden;
    opacity: 0;
    transform-origin: top center;
    z-index: 10;

    ${fixed &&
    withArrow &&
    css`
      &::after {
        content: '';
        position: absolute;
        background-color: inherit;
        width: ${arrowSize};
        height: ${arrowSize};
        border-width: inherit;
        border-style: solid;
        border-color: transparent light-400 light-400 transparent;
        border-bottom-right-radius: inherit;
        clip-path: polygon(0% 100%, 0% 100%, 100% 100%, 100% 0%);
        z-index: 0;
        translate: -50% -50%;

        ${placement.includes('top') &&
        css`
          top: 100%;
          left: ${getXPosition(placement)};
          rotate: 45deg;
        `}

        ${placement.includes('bottom') &&
        css`
          bottom: 100%;
          left: ${getXPosition(placement)};
          translate: -50% 50%;
          rotate: 225deg;
        `}

        ${placement.includes('left') &&
        css`
          top: ${getYPosition(placement, popoverHeight)};
          left: 100%;
          rotate: -45deg;
        `}

        ${placement.includes('right') &&
        css`
          top: ${getYPosition(placement, popoverHeight)};
          left: 0%;
          rotate: 135deg;
        `}
      }
    `}

    ${fixed &&
    css`
      transform: ${getFadeInDirection(placement)};
    `}

    [data-enter] & {
      ${fadeInStyle}
    }
  `
)

export const ChildItem = styled.div`
  display: inline-block;
`
