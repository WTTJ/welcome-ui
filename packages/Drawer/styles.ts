import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { cardStyles } from '@welcome-ui/utils'
import { ClearButton } from '@welcome-ui/clear-button'

import { DrawerProps, Placement, Size } from '.'

export const Backdrop = styled(Box)<{ isClickable: boolean }>(
  ({ isClickable }) => css`
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
    ${isClickable &&
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
        top: 0,
        right: 0,
        left: 0,
        // Used for animation
        transform: 'translateY(-100%)'
      }
    case 'right':
      return {
        top: 0,
        right: 0,
        bottom: 0,
        transform: 'translateX(100%)'
      }
    case 'bottom':
      return {
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateY(100%)'
      }
    case 'left':
      return {
        top: 0,
        bottom: 0,
        left: 0,
        transform: 'translateX(-100%)'
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
        height: size
      }
    case 'right':
    case 'left':
      if (SIZES.includes(size)) {
        return th(`drawers.sizes.horizontal.${size}`)
      }
      return {
        width: size
      }
  }
}

export const Drawer = styled(Box)<DrawerProps>(
  ({ placement, size }) => css`
    ${cardStyles};
    ${th('drawers.default')};
    ${getPlacementStyle(placement)}
    ${getSizeStyle(size, placement)}
    position: fixed;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    transition: medium;
    cursor: auto;

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

export const Close = styled(ClearButton)`
  ${th('drawers.closeButton')};
  position: absolute;
`

export const Title = styled(Text)`
  ${th('drawers.title')};
  width: 100%;
`

export const Content = styled(Box)`
  ${th('drawers.content')};
  flex: 1;
  overflow-y: auto;
`

export const Footer = styled(Box)`
  ${th('drawers.footer')};
  width: 100%;
`
