/* eslint-disable react/no-multi-comp */
import React from 'react'
import {
  DialogDisclosure,
  DialogInitialState,
  DialogStateReturn,
  useDialogState
} from 'reakit/Dialog'
import { DisclosureActions } from 'reakit/Disclosure'
import { Text } from '@welcome-ui/text'

import * as S from './styles'
import { Close } from './Close'

export type Size = 'sm' | 'md' | 'lg' | 'auto'

export interface ModalProps {
  ariaLabel: string
  closeElement?: React.ElementType
  hide?: DisclosureActions['hide']
  hideOnClickOutside?: boolean
  onClose?: () => void
  size?: Size
}

export function useModalState(options?: DialogInitialState): DialogStateReturn {
  return useDialogState({ animated: true, ...options })
}

const ModalComponent: React.FC<ModalProps> = props => {
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

  function closeModal() {
    onClose?.()
    hide()
  }

  return (
    <S.Backdrop {...rest} hideOnClickOutside={hideOnClickOutside}>
      <S.Dialog
        aria-label={ariaLabel}
        hide={closeModal}
        hideOnClickOutside={hideOnClickOutside}
        size={size}
        {...rest}
      >
        <CloseElement onClick={closeModal} size="sm" variant="tertiary" />
        {children}
      </S.Dialog>
    </S.Backdrop>
  )
}

ModalComponent.displayName = 'Modal'

export interface ModalTitleProps {
  children: React.ReactNode
}

const Title: React.FC<ModalTitleProps> = ({ children }) => (
  <S.Title as={Text} m="0" variant="h4">
    {children}
  </S.Title>
)

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Trigger: DialogDisclosure,
  Content: S.Content,
  Title: Title,
  Footer: S.Footer,
  Cover: S.Cover
})
