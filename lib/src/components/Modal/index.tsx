import * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'
import React, { cloneElement } from 'react'

import type { BoxProps } from '@/Box'
import type { ShapeProps } from '@/Shape'
import { Shape } from '@/Shape'
import type { As, CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import type { Size } from './theme'

import { Assets } from './Assets'
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import * as S from './styles'

export interface ModalOptions extends Omit<Ariakit.DialogOptions<'div'>, 'as'> {
  ariaLabel: string
  children: React.ReactElement
  size?: Size
}

export type ModalProps = CreateWuiProps<'div', ModalOptions>
export type UseModal = Ariakit.DialogStore
export type UseModalProps = {
  /**
   * Call a function before closing the modal
   * @deprecated use onClose on <Modal /> instead
   */
  onClose?: () => void
} & Ariakit.DialogStoreProps
export type UseModalState = Ariakit.DialogStoreState

type BackdropProps = Pick<ModalOptions, 'backdrop' | 'hideOnInteractOutside'>

export function useModal(options?: UseModalProps): UseModal {
  const { onClose, setOpen, ...storeOptions } = options || {}

  const dialog = Ariakit.useDialogStore({
    animated: true,
    setOpen: open => {
      if (!open && onClose) {
        onClose()
      }
      setOpen?.(open)
    },
    ...storeOptions,
  })

  return dialog
}

const Backdrop = forwardRef<'div', BackdropProps>(
  ({ backdrop, hideOnInteractOutside, ...rest }, ref) => {
    if (backdrop === true) {
      return <S.Backdrop hideOnInteractOutside={hideOnInteractOutside} ref={ref} {...rest} />
    }

    // Make sure backdrop is a valid React element before cloning it
    if (React.isValidElement(backdrop)) {
      return cloneElement(backdrop, {
        hideOnInteractOutside,
        ref,
        ...rest,
      } as React.HTMLAttributes<HTMLElement>)
    }

    return null
  }
)

const ModalComponent = forwardRef<'div', ModalProps>(
  (
    {
      ariaLabel,
      /** for render property */
      as: As = S.Dialog,
      backdrop = true,
      children,
      hideOnInteractOutside = true,
      size = 'lg',
      store,
      ...rest
    },
    ref
  ) => {
    return (
      <Ariakit.Dialog
        aria-label={ariaLabel}
        backdrop={
          backdrop && <Backdrop backdrop={backdrop} hideOnInteractOutside={hideOnInteractOutside} />
        }
        hideOnInteractOutside={hideOnInteractOutside}
        ref={ref}
        render={<As size={size} />}
        store={store}
        {...(rest as Ariakit.DialogProps<'div'>)}
      >
        {children}
      </Ariakit.Dialog>
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

type TriggerProps = { as?: As; children: React.ReactNode; store: Ariakit.DialogStore }

const Trigger = forwardRef<'button', TriggerProps>(({ as: As, store, ...rest }, ref) => {
  return (
    <Ariakit.DialogDisclosure
      ref={ref}
      render={As ? props => <As {...props} /> : undefined}
      store={store}
      {...rest}
    />
  )
})

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Body,
  Content,
  Cover,
  Footer,
  Header,
  Trigger,
})

// Asset Modal for pictures / videos / swiper
export const AssetModal = Assets
