/* eslint-disable react/no-multi-comp */
import React, { cloneElement } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogBackdropProps,
  DialogDisclosure,
  DialogInitialState,
  DialogOptions,
  DialogStateReturn,
  useDialogState,
} from 'reakit/Dialog'
import { SealedInitialState } from 'reakit-utils/ts/useSealedState'
import { CloseButtonProps } from '@welcome-ui/close-button'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type Placement = 'top' | 'right' | 'bottom' | 'left'
export type Size = 'sm' | 'md' | 'lg' | 'auto' | string

export interface DrawerOptions {
  placement?: Placement
  size?: Size
}

export type DrawerProps = CreateWuiProps<typeof Dialog, DrawerOptions & DialogOptions>

const DrawerComponent: React.FC<DrawerProps> = ({
  children,
  placement = 'right',
  size = 'lg',
  ...rest
}) => {
  return (
    // Needed to allow to style the backdrop
    // see: https://reakit.io/docs/styling/#css-in-js
    <Dialog {...rest}>
      {(props: DrawerProps) => (
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

export interface DrawerBackdropOptions {
  hideOnClickOutside?: boolean
  children: React.ReactElement
}

export type DrawerBackdropProps = DrawerBackdropOptions & DialogBackdropProps

// Needed to allow to style the backdrop
// see: https://reakit.io/docs/styling/#css-in-js
export const DrawerBackdrop: React.FC<DrawerBackdropProps> = ({
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

export interface DrawerCloseOptions {
  hide: () => void
}

export type DrawerCloseProps = DrawerCloseOptions & CloseButtonProps

export const DrawerClose: React.FC<DrawerCloseProps> = ({ hide, ...rest }) => {
  return <S.Close onClick={hide} {...rest} />
}

export const Drawer = Object.assign(DrawerComponent, {
  Trigger: DialogDisclosure,
  Backdrop: DrawerBackdrop,
  Close: DrawerClose,
  Title: S.Title,
  Content: S.Content,
  Footer: S.Footer,
})
