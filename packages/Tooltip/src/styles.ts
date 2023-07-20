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
  placement?: TooltipProps['placement']
  fixed?: boolean
  isOpen?: boolean
}

export const FadeIn = styled.div<FadeIn>(
  ({ fixed, isOpen, placement }) => css`
    ${th('tooltips')};
    ${system};
    transition: opacity ${th.transition('medium')}, transform ${th.transition('medium')},
      visibility ${th.transition('medium')};
    visibility: hidden;
    opacity: 0;
    transform-origin: top center;
    ${fixed &&
    css`
      transform: ${getFadeInDirection(placement)};
    `}

    [data-enter] & {
      ${fadeInStyle}
    }

    ${isOpen &&
    css`
      ${fadeInStyle}
    `}
  `
)

export const ChildItem = styled.div`
  display: inline-block;
`
