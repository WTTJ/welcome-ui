/* eslint-disable react/no-multi-comp */
import React from 'react'
import {
  DialogDisclosure,
  DialogInitialState,
  DialogStateReturn,
  useDialogState,
} from 'reakit/Dialog'
import { BoxProps } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'
import { Shape, ShapeProps } from '@welcome-ui/shape'

import * as S from './styles'
import { Close } from './Close'
import { Header } from './Header'
import { Footer } from './Footer'
import { Content } from './Content'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'auto'

export interface ModalOptions {
  ariaLabel: string
  closeElement?: React.ElementType
  hideOnClickOutside?: boolean
  onClose?: () => void
  size?: Size
  modalState: ModalStateReturn
  children: React.ReactElement
}

export type ModalProps = CreateWuiProps<'div', ModalOptions>
export type ModalInitialState = DialogInitialState
export type ModalStateReturn = DialogStateReturn

export function useModalState(options?: ModalInitialState): ModalStateReturn {
  return useDialogState({ animated: true, ...options })
}

const ModalComponent = forwardRef<'div', ModalProps>(
  (
    {
      hideOnClickOutside = true,
      onClose,
      closeElement: CloseElement = Close,
      size = 'lg',
      children,
      modalState,
      ...rest
    },
    ref
  ) => {
    const closeModal = () => {
      onClose?.()
      modalState.hide()
    }

    return (
      <S.Backdrop {...modalState} hideOnClickOutside={hideOnClickOutside}>
        <S.Dialog
          hide={closeModal}
          hideOnClickOutside={hideOnClickOutside}
          ref={ref}
          size={size}
          {...modalState}
          {...rest}
        >
          <CloseElement onClick={closeModal} />
          {children}
        </S.Dialog>
      </S.Backdrop>
    )
  }
)

const Body = forwardRef<'div', BoxProps>((props, ref) => {
  return <S.Body ref={ref} {...props} />
})

Body.displayName = 'Body'

const Cover: React.FC<ShapeProps> = props => {
  const { modals } = useTheme()

  return (
    <div>
      <Shape {...modals.cover} {...props} />
    </div>
  )
}

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Trigger: DialogDisclosure,
  Content,
  Header,
  Body,
  Footer,
  Cover,
})
