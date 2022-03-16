/* eslint-disable react/no-multi-comp */
import React, { cloneElement } from 'react'
import {
  Dialog,
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
  ({ as, children, placement = 'right', size = 'lg', tabIndex, ...rest }, ref) => {
    return (
      // Needed to allow to style the backdrop
      // see: https://reakit.io/docs/styling/#css-in-js
      <Dialog as={as} ref={ref} tabIndex={tabIndex} {...rest}>
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
  backdropVisible?: boolean
  children: React.ReactElement
}

export type DrawerBackdropProps = DrawerBackdropOptions & DialogBackdropProps

// Needed to allow to style the backdrop
// see: https://reakit.io/docs/styling/#css-in-js
/**
 * @name Drawer.Backdrop
 */
export const DrawerBackdrop: React.FC<DrawerBackdropProps> = ({
  backdropVisible = true,
  children,
  hideOnClickOutside = true,
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
    <Wrapper {...rest} hideOnClickOutside={hideOnClickOutside} {...optionalWrapperProps}>
      {cloneElement(children, { hideOnClickOutside })}
    </Wrapper>
  )
}

export type CloseOptions = { hide: VoidFunction }
export type CloseProps = CloseOptions & CloseButtonProps

export const Close: React.FC<CloseProps> = ({ hide, ...props }) => {
  const { drawers } = useTheme()
  return (
    <Box
      display="flex"
      h="0"
      justifyContent="flex-end"
      position="sticky"
      top="0"
      w="auto"
      zIndex="1"
    >
      <CloseButton {...drawers.closeButton} onClick={hide} {...props} />
    </Box>
  )
}

export const Title: React.FC<TextProps> = props => {
  const { drawers } = useTheme()
  return (
    <Box
      alignItems="center"
      backgroundColor="light.900"
      display="flex"
      justifyContent="space-between"
      position={{ xs: 'sticky', md: 'static' }}
      top={{ xs: 0, md: 'auto' }}
      w="100%"
    >
      <Text {...drawers.title} w="100%" {...props} />
    </Box>
  )
}

export const Content: React.FC<BoxProps> = props => {
  const { drawers } = useTheme()
  return <Box {...drawers.content} flex="1" overflowY={{ md: 'auto' }} {...props} />
}

export const Footer: React.FC<BoxProps> = props => {
  const { drawers } = useTheme()
  return (
    <Box
      backgroundColor={{ xs: 'white', md: 'transparent' }}
      bottom={{ xs: 0, md: 'auto' }}
      position={{ xs: 'sticky', md: 'static' }}
      {...drawers.footer}
      w="100%"
      {...props}
    />
  )
}

export const Drawer = Object.assign(DrawerComponent, {
  Trigger: DialogDisclosure,
  Backdrop: DrawerBackdrop,
  Close,
  Title,
  Content,
  Footer,
})
