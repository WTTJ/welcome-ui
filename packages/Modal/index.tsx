/* eslint-disable react/no-multi-comp */
import React from 'react'
import {
  DialogDisclosure,
  DialogInitialState,
  DialogStateReturn,
  useDialogState,
} from 'reakit/Dialog'
import { DisclosureActions } from 'reakit/Disclosure'
import { Box, BoxProps } from '@welcome-ui/box'
import { Text, TextProps } from '@welcome-ui/text'
import { Shape, ShapeProps } from '@welcome-ui/shape'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'

import * as S from './styles'
import { Close } from './Close'

export type Size = 'sm' | 'md' | 'lg' | 'auto'

export interface ModalOptions {
  ariaLabel: string
  closeElement?: React.ElementType
  hide?: DisclosureActions['hide']
  hideOnClickOutside?: boolean
  onClose?: () => void
  size?: Size
}

export type ModalProps = CreateWuiProps<'div', ModalOptions>
export type ModalInitialState = DialogInitialState
export type ModalStateReturn = DialogStateReturn

export function useModalState(options?: ModalInitialState): ModalStateReturn {
  return useDialogState({ animated: true, ...options })
}

const ModalComponent = forwardRef<'div', ModalProps>((props, ref) => {
  const {
    ariaLabel,
    children,
    hide,
    hideOnClickOutside = true,
    onClose,
    closeElement: CloseElement = Close,
    size = 'lg',
    ...rest
  } = props

  const closeModal = () => {
    onClose?.()
    hide()
  }

  return (
    <S.Backdrop {...rest} hideOnClickOutside={hideOnClickOutside}>
      <S.Dialog
        aria-label={ariaLabel}
        hide={closeModal}
        hideOnClickOutside={hideOnClickOutside}
        ref={ref}
        size={size}
        {...rest}
      >
        <CloseElement onClick={closeModal} />
        {children}
      </S.Dialog>
    </S.Backdrop>
  )
})

ModalComponent.displayName = 'Modal'

const Title: React.FC<TextProps> = props => {
  const { modals } = useTheme()
  return <Text {...modals.title} m="0" p="xxl 5xl xxl xxl" variant="h4" w="100%" {...props} />
}

const Content: React.FC<BoxProps> = props => (
  <Box flex={1} overflowY="auto" padding="5xl" {...props} />
)

const Cover: React.FC<ShapeProps> = props => {
  const { modals } = useTheme()
  return <Shape {...modals.cover} {...props} />
}

const Footer: React.FC<BoxProps> = props => {
  const { modals } = useTheme()
  return <Box {...modals.footer} w="100%" {...props} />
}

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Trigger: DialogDisclosure,
  Content,
  Title,
  Footer,
  Cover,
})
