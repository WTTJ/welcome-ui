import styled, { css, DefaultTheme } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { cardStyles } from '@welcome-ui/utils'
import { DialogBackdrop } from 'reakit/Dialog'

import { DrawerOptions, DrawerSize, Placement, Size } from '.'

type DrawerWrapperProps = {
  hideOnClickOutside: boolean
  placement?: Placement
  size?: Size
}

export const Backdrop = styled(DialogBackdrop).withConfig({
  shouldForwardProp: prop => !['hideOnClickOutside'].includes(prop),
})<DrawerWrapperProps>(
  ({ hideOnClickOutside, theme }) => css`
    ${theme.drawers.backdrop};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: ${theme.transitions.fast};
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
const getSizeStyle = (size: Size, placement: Placement, theme: DefaultTheme) => {
  switch (placement) {
    case 'top':
    case 'bottom':
      if (SIZES.includes(size)) {
        return theme.drawers.sizes.vertical[size as DrawerSize]
      }
      return {
        height: size,
      }
    case 'right':
    case 'left':
      if (SIZES.includes(size)) {
        return theme.drawers.sizes.horizontal[size as DrawerSize]
      }
      return {
        width: size,
      }
  }
}

export const Drawer = styled(Box)<DrawerOptions>(
  ({ placement, size, theme }) => css`
    ${cardStyles};
    ${theme.drawers.default};
    ${getPlacementStyle(placement)}
    ${getSizeStyle(size, placement, theme)}
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
  ({ hideOnClickOutside, placement, size, theme }) => css`
    ${theme.drawers.backdrop};
    ${getBackdropWrapperPlacementStyle(placement)}
    ${getSizeStyle(size, placement, theme)}
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    max-width: 100%;
    max-height: 100%;
    opacity: 0;
    transition: ${theme.transitions.fast};
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
