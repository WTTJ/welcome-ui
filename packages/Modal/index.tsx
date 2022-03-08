/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement, useRef } from 'react'
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
  children: React.ReactNode[]
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
    tabIndex,
    ...rest
  } = props

  const headerRef = useRef(null)
  const footerRef = useRef(null)
  const headerHeight = headerRef?.current?.clientHeight
  const footerHeight = footerRef?.current?.clientHeight

  function setRef(name?: string) {
    if (name === 'ModalTitle') {
      return headerRef
    }

    if (name === 'ModalFooter') {
      return footerRef
    }

    return undefined
  }

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
        tabIndex={tabIndex}
        {...rest}
      >
        <CloseElement onClick={closeModal} />
        {Children.map(children, (child: JSX.Element) => {
          const name = child?.type?.displayName || child?.type?.name

          return cloneElement(child, {
            ref: setRef(name),
            mt: { xs: name === 'Content' ? headerHeight : undefined, md: 0 },
            mb: { xs: name === 'Content' ? footerHeight : undefined, md: 0 },
          })
        })}
      </S.Dialog>
    </S.Backdrop>
  )
})

ModalComponent.displayName = 'Modal'

const Title = forwardRef<'h4', TextProps>((props, ref) => {
  const { modals } = useTheme()

  return (
    <Text
      {...modals.title}
      m="0"
      p="xxl 5xl xxl xxl"
      position={{ xs: 'fixed', md: 'relative' }}
      ref={ref}
      top="0"
      variant="h4"
      w="100%"
      {...props}
    />
  )
})

Title.displayName = 'ModalTitle'

const Content: React.FC<BoxProps> = props => (
  <Box flex="1" overflowY={{ md: 'auto' }} padding="5xl" {...props} />
)

const Cover: React.FC<ShapeProps> = props => {
  const { modals } = useTheme()
  return (
    <div>
      <Shape {...modals.cover} {...props} />
    </div>
  )
}

const Footer = forwardRef<'div', BoxProps>((props, ref) => {
  const { modals } = useTheme()
  return (
    <Box
      {...modals.footer}
      bottom="0"
      position={{ xs: 'fixed', md: 'relative' }}
      ref={ref}
      w="100%"
      {...props}
    />
  )
})

Footer.displayName = 'ModalFooter'

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Trigger: DialogDisclosure,
  Content,
  Title,
  Footer,
  Cover,
})
