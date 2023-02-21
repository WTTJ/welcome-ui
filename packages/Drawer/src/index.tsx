/* eslint-disable react/no-multi-comp */
import React, { cloneElement } from 'react'
import {
  Dialog,
  DialogBackdropProps,
  DialogDisclosure,
  DialogDisclosureProps,
  DialogOptions,
  DialogProps,
  DialogState,
  DialogStateReturn,
  useDialogState,
} from 'reakit/Dialog'
import { Box, BoxProps } from '@welcome-ui/box'
import { CloseButtonProps } from '@welcome-ui/close-button'
import { Text, TextProps } from '@welcome-ui/text'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type Placement = 'top' | 'right' | 'bottom' | 'left'
export type Size = 'sm' | 'md' | 'lg' | 'auto' | string

export interface DrawerOptions {
  placement?: Placement
  size?: Size
  state?: DialogOptions
}

export type DrawerProps = CreateWuiProps<'div', DrawerOptions>

const DrawerComponent = forwardRef<'div', DrawerProps>(
  ({ as, children, placement = 'right', size = 'lg', state, ...rest }, ref) => {
    return (
      // Needed to allow to style the backdrop
      // see: https://reakit.io/docs/styling/#css-in-js
      <Dialog as={as} ref={ref} {...state} {...rest}>
        {props => (
          <S.Drawer {...props} placement={placement} size={size}>
            {children}
          </S.Drawer>
        )}
      </Dialog>
    )
  }
)

export type DrawerStateReturn = DialogStateReturn & {
  open: DialogStateReturn['visible']
}

export function useDrawerState(
  options?: DialogState & {
    /**
     * @deprecated
     * will be replace by open on ariakit (reakit v2)
     **/
    visible?: DialogState['visible']
    /**
     * Open the drawer on load
     */
    open?: DialogState['visible']
  }
): DrawerStateReturn {
  const { open, visible, ...restOptions } = options || {}
  const dialogState = useDialogState({ animated: true, visible: visible || open, ...restOptions })

  return { open: dialogState.visible, ...dialogState }
}

export interface DrawerBackdropOptions {
  hideOnClickOutside?: boolean
  backdropVisible?: boolean
  state: DialogBackdropProps
  children: React.ReactElement
}

export type DrawerBackdropProps = DrawerBackdropOptions

// Needed to allow to style the backdrop
// see: https://reakit.io/docs/styling/#css-in-js
/**
 * @name Drawer.Backdrop
 */
export const DrawerBackdrop: React.FC<DrawerBackdropProps> = ({
  backdropVisible = true,
  children,
  hideOnClickOutside = true,
  state,
  ...rest
}) => {
  const Wrapper = backdropVisible ? S.Backdrop : S.NoBackdropWrapper
  const placement = children?.props?.placement || 'right'
  const size = children?.props?.size || 'lg'
  const optionalWrapperProps = {
    size,
    placement,
  }

  return (
    <Wrapper {...state} {...rest} hideOnClickOutside={hideOnClickOutside} {...optionalWrapperProps}>
      {cloneElement(children, { hideOnClickOutside })}
    </Wrapper>
  )
}

export type CloseOptions = { state: DialogProps }
export type CloseProps = CloseOptions & CloseButtonProps

export const Close: React.FC<CloseProps> = ({ state, zIndex = '2', ...props }) => {
  const { hide } = state

  return (
    <Box
      display="flex"
      h="0"
      justifyContent="flex-end"
      position="sticky"
      top="0"
      w="auto"
      zIndex={zIndex}
    >
      <S.CloseButton onClick={hide} {...props} />
    </Box>
  )
}

export const Title: React.FC<TextProps> = ({ children, zIndex = '1', ...props }) => {
  return (
    <S.Title
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      position={{ xs: 'sticky', md: 'static' }}
      top={{ xs: 0, md: 'auto' }}
      w="100%"
      zIndex={zIndex}
      {...props}
    >
      <Text m="0" variant="h3" w="100%">
        {children}
      </Text>
    </S.Title>
  )
}

export const Content: React.FC<BoxProps> = props => {
  return <S.Content flex="1" overflowY={{ md: 'auto' }} {...props} />
}

export const Footer: React.FC<BoxProps> = props => {
  return (
    <S.Footer
      bottom={{ xs: 0, md: 'auto' }}
      position={{ xs: 'sticky', md: 'static' }}
      w="100%"
      {...props}
    />
  )
}

export const Trigger: React.FC<{ state: DialogDisclosureProps; children: React.ReactNode }> = ({
  state,
  ...rest
}) => {
  return <DialogDisclosure {...state} {...rest} />
}

export const Drawer = Object.assign(DrawerComponent, {
  Trigger,
  Backdrop: DrawerBackdrop,
  Close,
  Title,
  Content,
  Footer,
})
