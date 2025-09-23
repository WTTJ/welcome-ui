import { Dialog, useDialogStore } from '@ariakit/react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { Assets } from './Assets'
import { Backdrop } from './components/Backdrop'
import { Body } from './components/Body'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Trigger } from './components/Trigger'
import modalStyles from './modal.module.scss'
import type { ModalProps, UseModal, UseModalProps } from './types'

const cx = classNames(modalStyles)

export function useModal(options?: UseModalProps): UseModal {
  const { onClose, setOpen, ...storeOptions } = options || {}

  const dialog = useDialogStore({
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

const ModalComponent = forwardRefWithAs<ModalProps, 'div'>(
  (
    {
      ariaLabel,
      /** for render property */
      as: As,
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
      <Dialog
        aria-label={ariaLabel}
        backdrop={<Backdrop backdrop={backdrop} hideOnInteractOutside={hideOnInteractOutside} />}
        hideOnInteractOutside={hideOnInteractOutside}
        ref={ref}
        render={props =>
          As ? <As {...props} /> : <div className={cx('root', `size-${size}`)} {...props} />
        }
        store={store}
        {...rest}
      >
        {children}
      </Dialog>
    )
  }
)

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Body,
  Content,
  Footer,
  Header,
  Trigger,
})

// Asset Modal for pictures / videos / swiper
export const AssetModal = Assets
