import styled, { css, th } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'

import { DrawerOptions } from '.'

import { CloseButton as WUICloseButton } from '@/CloseButton'

const getPlacementStyle = (placement: DrawerOptions['placement']) => {
  switch (placement) {
    case 'top':
      return {
        top: '0 !important',
        right: 0,
        left: 0,
        transform: 'translateY(-100%)',
      }
    case 'right':
      return {
        top: '0 !important',
        right: 0,
        bottom: 0,
        transform: 'translateX(100%)',
      }
    case 'bottom':
      return {
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateY(100%)',
      }
    case 'left':
      return {
        top: '0 !important',
        bottom: 0,
        left: 0,
        transform: 'translateX(-100%)',
      }
  }
}

const SIZES = ['sm', 'md', 'lg']

const getSizeStyle = (size: DrawerOptions['size'], placement: DrawerOptions['placement']) => {
  switch (placement) {
    case 'top':
    case 'bottom':
      if (SIZES.includes(size)) {
        return th(`drawers.sizes.vertical.${size}`)
      }
      return {
        height: size,
      }
    case 'right':
    case 'left':
      if (SIZES.includes(size)) {
        return th(`drawers.sizes.horizontal.${size}`)
      }
      return {
        width: size,
      }
  }
}

export const Drawer = styled.divBox<Pick<DrawerOptions, 'placement' | 'size'>>(
  ({ placement, size }) => css`
    ${th('cards.default')};
    ${th('drawers.default')};
    ${getPlacementStyle(placement)}
    ${getSizeStyle(size, placement)}
    position: fixed;
    display: flex;
    flex-direction: column;
    overflow: auto;
    opacity: 0;
    transition: medium;
    max-width: 100%;

    &[data-enter] {
      opacity: 1;
      transform: translate(0, 0);
    }
  `
)

export const Backdrop = styled.divBox.withConfig({
  shouldForwardProp: prop => !['hideOnInteractOutside'].includes(prop),
})<{ hideOnInteractOutside: Ariakit.DialogProps['hideOnInteractOutside'] }>(
  ({ hideOnInteractOutside }) => css`
    ${th('drawers.backdrop')};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    ${hideOnInteractOutside &&
    css`
      cursor: pointer;
    `}

    &[data-enter] {
      opacity: 1;
    }
  `
)

export const Title = styled.divBox`
  ${th('drawers.title')};
`

export const Content = styled.divBox`
  ${th('drawers.content')};
`

export const CloseButton = styled(WUICloseButton)`
  ${th('drawers.closeButton')};
`

export const Footer = styled.divBox`
  ${th('drawers.footer')};
`
