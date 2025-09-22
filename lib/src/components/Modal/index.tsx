import * as Ariakit from '@ariakit/react'
import { useTheme } from '@xstyled/styled-components'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import React, { cloneElement, forwardRef } from 'react'

import { classNames } from '@/utils'
import type { MergeProps } from '@/utils/forwardRefWithAs'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'
//TODO Migrate shape, but to what?
import type { ShapeProps } from '@old/Shape'
import { Shape } from '@old/Shape'

import { Assets } from './Assets'
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import modalStyles from './modal.module.scss'
import type { Size } from './theme'

export interface ModalOptions extends Omit<Ariakit.DialogOptions<'div'>, 'as'> {
  ariaLabel: string
  children: React.ReactElement
  size?: Size
}

export type ModalProps = MergeProps<ModalOptions, HTMLAttributes<HTMLDivElement>>
export type UseModal = Ariakit.DialogStore
export type UseModalProps = Ariakit.DialogStoreProps & {
  /**
   * Call a function before closing the modal
   * @deprecated use onClose on <Modal /> instead
   */
  onClose?: () => void
}
export type UseModalState = Ariakit.DialogStoreState

type BackdropProps = Pick<ModalOptions, 'backdrop' | 'hideOnInteractOutside'>

const cx = classNames(modalStyles)

export function useModal(options?: UseModalProps): UseModal {
  const { onClose, setOpen, ...storeOptions } = options || {}

  const dialog = Ariakit.useDialogStore({
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
      <Ariakit.Dialog
        aria-label={ariaLabel}
        backdrop={<Backdrop backdrop={backdrop} hideOnInteractOutside={hideOnInteractOutside} />}
        hideOnInteractOutside={hideOnInteractOutside}
        ref={ref}
        render={props =>
          As ? <As {...props} /> : <div className={cx('dialog', `size-${size}`)} {...props} />
        }
        store={store}
        {...(rest as Ariakit.DialogProps<'div'>)}
      >
        {children}
      </Ariakit.Dialog>
    )
  }
)

type BodyProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

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

type TriggerProps = PropsWithChildren<{ store: Ariakit.DialogStore }>

const Trigger = forwardRefWithAs<TriggerProps, 'button'>(({ as: As, store, ...rest }, ref) => {
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
