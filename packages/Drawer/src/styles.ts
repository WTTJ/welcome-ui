import styled, { css, th } from '@xstyled/styled-components'
import { cardStyles } from '@welcome-ui/utils'
import { CloseButton as WUICloseButton } from '@welcome-ui/close-button'
import { DialogBackdrop } from 'reakit'

import { DrawerOptions, Placement, Size } from '.'

type DrawerWrapperProps = {
  hideOnClickOutside: boolean
  placement?: Placement
  size?: Size
}

export const Backdrop = styled(DialogBackdrop).withConfig({
  shouldForwardProp: prop => !['hideOnClickOutside'].includes(prop),
})<DrawerWrapperProps>(
  ({ hideOnClickOutside }) => css`
    ${th('drawers.backdrop')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: fast;
    ${hideOnClickOutside &&
    css`
      cursor: pointer;
    `}

    /* on open dialog for animation */
    &[data-enter] {
      opacity: 1;
    }
  `
)

const getPlacementStyle = (placement: Placement) => {
  switch (placement) {
    case 'top':
      return {
        top: '0 !important',
        right: 0,
        left: 0,
        // Used for animation
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
const getSizeStyle = (size: Size, placement: Placement) => {
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

export const Drawer = styled.box<DrawerOptions>(
  ({ placement, size }) => css`
    ${cardStyles};
    ${th('drawers.default')};
    ${getPlacementStyle(placement)}
    ${getSizeStyle(size, placement)}
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    transition: medium;
    cursor: auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      /* important for firefox */
      outline: none !important;
    }

    /* on open/close dialog for animation */
    &[data-enter] {
      transform: translate(0, 0);
    }

    &[data-leave] {
      transition: fast;
    }
  `
)

const getBackdropWrapperPlacementStyle = (placement: Placement) => {
  switch (placement) {
    case 'top':
      return {
        top: 0,
        right: 0,
        left: 0,
      }
    case 'right':
      return {
        top: 0,
        right: 0,
        bottom: 0,
      }
    case 'bottom':
      return {
        right: 0,
        bottom: 0,
        left: 0,
      }
    case 'left':
      return {
        top: 0,
        bottom: 0,
        left: 0,
      }
  }
}

export const NoBackdropWrapper = styled(DialogBackdrop).withConfig({
  shouldForwardProp: prop => !['hideOnClickOutside'].includes(prop),
})<DrawerWrapperProps>(
  ({ hideOnClickOutside, placement, size }) => css`
    ${th('drawers.backdrop')};
    ${getBackdropWrapperPlacementStyle(placement)}
    ${getSizeStyle(size, placement)}
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    max-width: 100%;
    max-height: 100%;
    opacity: 0;
    transition: fast;
    ${hideOnClickOutside &&
    css`
      cursor: pointer;
    `}

    /* on open dialog for animation */
    &[data-enter] {
      opacity: 1;
    }
  `
)

export const Title = styled.box`
  ${({ theme }) => theme.drawers.title}
`

export const Content = styled.box`
  ${({ theme }) => theme.drawers.content}
`

export const CloseButton = styled(WUICloseButton)`
  ${({ theme }) => theme.drawers.closeButton}
`

export const Footer = styled.box`
  ${({ theme }) => theme.drawers.footer}
`
