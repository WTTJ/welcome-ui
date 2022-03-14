/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement, useEffect, useRef } from 'react'
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
  ({ as, children, placement = 'right', size = 'lg', tabIndex, visible, ...rest }, ref) => {
    const headerRef = useRef(null)
    const footerRef = useRef(null)
    const headerHeight = headerRef?.current?.clientHeight
    const footerHeight = footerRef?.current?.clientHeight

    function setRef(name?: string) {
      if (name === 'DrawerTitle') {
        return headerRef
      }

      if (name === 'DrawerFooter') {
        return footerRef
      }

      return undefined
    }

    function getContentStyles(name?: string) {
      if (name === 'Content') {
        return {
          mt: headerHeight,
          mb: footerHeight,
          pt: headerHeight ? 0 : undefined,
          pb: footerHeight ? 0 : undefined,
          pr: !headerHeight ? '5xl' : undefined,
        }
      }

      return {}
    }

    useEffect(() => {
      if (visible) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.removeProperty('overflow')
      }
    }, [visible])

    return (
      // Needed to allow to style the backdrop
      // see: https://reakit.io/docs/styling/#css-in-js
      <Dialog as={as} ref={ref} style={{ tabIndex }} visible={visible} {...rest}>
        {(props: DrawerProps) => (
          <S.Drawer {...props} placement={placement} size={size} visible={visible}>
            {Children.map(children, (child: JSX.Element) => {
              const name = child?.type?.displayName || child?.type?.name

              return cloneElement(child, {
                ref: setRef(name),
                ...getContentStyles(name),
                ...child.props,
              })
            })}
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

  return (
    <CloseButton {...drawers.closeButton} onClick={hide} position="fixed" zIndex="2" {...props} />
  )
}

export const Title = forwardRef<'h4', TextProps>((props, ref) => {
  const { drawers } = useTheme()

  return (
    <Text
      {...drawers.title}
      left="0"
      position="absolute"
      ref={ref}
      top="0"
      variant="h4"
      w="100%"
      zIndex="1"
      {...props}
    />
  )
})
Title.displayName = 'DrawerTitle'

export const Content: React.FC<BoxProps> = props => {
  const { drawers } = useTheme()

  return (
    <S.Content>
      <Box {...drawers.content} {...props} />
    </S.Content>
  )
}

export const Footer = forwardRef<'div', BoxProps>((props, ref) => {
  const { drawers } = useTheme()

  return (
    <Box {...drawers.footer} bottom="0" left="0" position="fixed" ref={ref} w="100%" {...props} />
  )
})
Footer.displayName = 'DrawerFooter'

export const Drawer = Object.assign(DrawerComponent, {
  Trigger: DialogDisclosure,
  Backdrop: DrawerBackdrop,
  Close,
  Title,
  Content,
  Footer,
})
