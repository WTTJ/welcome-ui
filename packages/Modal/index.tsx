/* eslint-disable react/no-multi-comp */
import React from 'react'
import {
  DialogDisclosure,
  DialogInitialState,
  DialogStateReturn,
  useDialogState,
} from 'reakit/Dialog'
import { DisclosureActions } from 'reakit/Disclosure'
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
  hide?: DisclosureActions['hide']
  hideOnClickOutside?: boolean
  onClose?: () => void
  size?: Size
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
      ariaLabel,
      hide,
      hideOnClickOutside = true,
      onClose,
      closeElement: CloseElement = Close,
      size = 'lg',
      tabIndex,
      dataTestId,
      children,
      ...rest
    },
    ref
  ) => {
    const closeModal = () => {
      onClose?.()
      hide()
    }

    return (
      <S.Backdrop {...rest} hideOnClickOutside={hideOnClickOutside}>
        <S.Dialog
          aria-label={ariaLabel}
          data-testid={dataTestId}
          hide={closeModal}
          hideOnClickOutside={hideOnClickOutside}
          ref={ref}
          size={size}
          tabIndex={tabIndex}
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
  return <S.Body flex="1" overflowY={{ md: 'auto' }} ref={ref} {...props} />
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
