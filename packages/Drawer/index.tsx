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
import { Box, BoxProps } from '@welcome-ui/box'
import { CloseButton, CloseButtonProps } from '@welcome-ui/close-button'
import { Text, TextProps } from '@welcome-ui/text'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'

import * as S from './styles'

export type Placement = 'top' | 'right' | 'bottom' | 'left'
export type Size = 'sm' | 'md' | 'lg' | 'auto' | string

export interface DrawerOptions {
  placement?: Placement
  size?: Size
}

export type DrawerProps = CreateWuiProps<'div', DrawerOptions & DialogOptions>

const DrawerComponent = forwardRef<'div', DrawerProps>(
  ({ as, children, placement = 'right', size = 'lg', ...rest }, ref) => {
    return (
      // Needed to allow to style the backdrop
      // see: https://reakit.io/docs/styling/#css-in-js
      <Dialog as={as} ref={ref} {...rest}>
        {(props: DrawerProps) => (
          <S.Drawer {...props} placement={placement} size={size}>
            {children}
          </S.Drawer>
        )}
      </Dialog>
    )
  }
)

export type DrawerStateReturn = DialogStateReturn

export function useDrawerState(
  options?: SealedInitialState<DialogInitialState>
): DrawerStateReturn {
  return useDialogState({ animated: true, ...options })
}

export interface DrawerBackdropOptions {
  hideOnClickOutside?: boolean
  children: React.ReactElement
}

export type DrawerBackdropProps = DrawerBackdropOptions & DialogBackdropProps

// Needed to allow to style the backdrop
// see: https://reakit.io/docs/styling/#css-in-js
/**
 * @name Drawer.Backdrop
 */
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

export type CloseOptions = { hide: VoidFunction }
export type CloseProps = CloseOptions & CloseButtonProps

export const Close: React.FC<CloseProps> = ({ hide, ...props }) => {
  const { drawers } = useTheme()
  return <CloseButton {...drawers.closeButton} onClick={hide} position="absolute" {...props} />
}

export const Title: React.FC<TextProps> = props => {
  const { drawers } = useTheme()
  return <Text {...drawers.title} w="100%" {...props} />
}

export const Content: React.FC<BoxProps> = props => {
  const { drawers } = useTheme()
  return <Box {...drawers.content} flex="1" overflowY="auto" {...props} />
}

export const Footer: React.FC<BoxProps> = props => {
  const { drawers } = useTheme()
  return <Box {...drawers.footer} w="100%" {...props} />
}

export const Drawer = Object.assign(DrawerComponent, {
  Trigger: DialogDisclosure,
  Backdrop: DrawerBackdrop,
  Close,
  Title,
  Content,
  Footer,
})
