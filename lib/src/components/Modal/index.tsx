import { Dialog, DialogDisclosure, useDialogStore } from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'
import React, { cloneElement, forwardRef } from 'react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'
//TODO Migrate shape, but to what?
import type { ShapeProps } from '@old/Shape'
import { Shape } from '@old/Shape'

import { Assets } from './components/Assets'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import modalStyles from './modal.module.scss'
import type {
  BackdropProps,
  BodyProps,
  ModalProps,
  TriggerProps,
  UseModal,
  UseModalProps,
} from './types'

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

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ backdrop, hideOnInteractOutside, ...rest }, ref) => {
    const backdropClassNames = cx('backdrop', hideOnInteractOutside && 'hideOnInteractOutside')

    if (backdrop === true) {
      return <div className={backdropClassNames} ref={ref} {...rest} />
    }

    if (React.isValidElement(backdrop)) {
      //FIXME should we add classes to Backdrop props?
      return cloneElement(backdrop, { className: backdropClassNames, ref, ...rest })
    }

    return null
  }
)

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

const Body = forwardRef<HTMLElement, BodyProps>((props, ref) => {
  return <section className={cx('body')} ref={ref} {...props} />
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

const Trigger = forwardRefWithAs<TriggerProps, 'button'>(({ as: As, store, ...rest }, ref) => {
  return (
    <DialogDisclosure
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
