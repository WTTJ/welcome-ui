import { Dialog, useDialogStore, useStoreState } from '@ariakit/react'
import { useEffect, useState } from 'react'

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
      className,
      hideOnInteractOutside = true,
      size = 'lg',
      store,
      ...rest
    },
    ref
  ) => {
    const [scrollable, setScrollable] = useState(false)
    const { contentElement, open } = useStoreState(store)

    // calculate the contentElement height when the modal open
    useEffect(() => {
      if (open && contentElement)
        setScrollable(contentElement.scrollHeight > contentElement.offsetHeight)
    }, [contentElement, open])

    return (
      <Dialog
        backdrop={<Backdrop backdrop={backdrop} hideOnInteractOutside={hideOnInteractOutside} />}
        hideOnInteractOutside={hideOnInteractOutside}
        ref={ref}
        render={
          As ? (
            <As />
          ) : (
            <div className={cx('root', `size-${size}`, scrollable && 'scrollable', className)} />
          )
        }
        store={store}
        {...rest}
        aria-label={ariaLabel}
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
