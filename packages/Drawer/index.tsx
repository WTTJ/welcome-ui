/* eslint-disable react/no-multi-comp */
import React, { cloneElement } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogBackdropProps,
  DialogDisclosure,
  DialogInitialState,
  DialogProps,
  DialogStateReturn,
  useDialogState
} from 'reakit/Dialog'
import { SealedInitialState } from 'reakit-utils/ts/useSealedState'
import { ClearButtonProps } from '@welcome-ui/clear-button'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type Placement = 'top' | 'right' | 'bottom' | 'left'
export type Size = 'sm' | 'md' | 'lg' | 'auto' | string

export interface DrawerProps {
  placement?: Placement
  size?: Size
}

const DrawerComponent: React.FC<DrawerProps & DialogProps> = ({
  children,
  placement = 'right',
  size = 'lg',
  ...rest
}) => {
  return (
    // Needed to allow to style the backdrop
    // see: https://reakit.io/docs/styling/#css-in-js
    <Dialog {...rest}>
      {props => (
        <S.Drawer {...props} placement={placement} size={size}>
          {children}
        </S.Drawer>
      )}
    </Dialog>
  )
}

export function useDrawerState(
  options?: SealedInitialState<DialogInitialState>
): DialogStateReturn {
  return useDialogState({ animated: true, ...options })
}

export interface DrawerBackdropProps {
  hideOnClickOutside?: boolean
  children: React.ReactElement
}

// Needed to allow to style the backdrop
// see: https://reakit.io/docs/styling/#css-in-js
export const DrawerBackdrop: React.FC<DrawerBackdropProps & DialogBackdropProps> = ({
  children,
  hideOnClickOutside = true,
  ...rest
}) => {
  if (children.type !== Drawer) {
    throw new Error('<Drawer.Backdrop /> children has to be <Drawer />.')
  }

  return (
    <DialogBackdrop {...rest}>
      {props => (
        <S.Backdrop isClickable={hideOnClickOutside} {...props}>
          {cloneElement(children, { hideOnClickOutside })}
        </S.Backdrop>
      )}
    </DialogBackdrop>
  )
}

export interface DrawerCloseProps {
  hide: () => void
}

export const DrawerClose: React.FC<DrawerCloseProps & ClearButtonProps & WuiProps> = ({
  hide,
  ...rest
}) => {
  return <S.Close onClick={hide} {...rest} />
}

export const Drawer = Object.assign(DrawerComponent, {
  Trigger: DialogDisclosure,
  Backdrop: DrawerBackdrop,
  Close: DrawerClose,
  Title: S.Title,
  Content: S.Content,
  Footer: S.Footer
})
