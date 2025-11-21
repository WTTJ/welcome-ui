import type { DialogProps } from '@ariakit/react'
import { Dialog } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import { AssetDrawerComponent } from './AssetDrawer'
import { Header } from './AssetDrawer/Header'
import { Backdrop } from './components/Backdrop'
import { Close } from './components/Close'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Title } from './components/Title'
import { Trigger } from './components/Trigger'
import styles from './drawer.module.scss'
import type { DrawerProps } from './types'

const cx = classNames(styles)

const DrawerComponent = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      className,
      hideOnInteractOutside = true,
      placement = 'right',
      size = 'lg',
      store,
      withBackdrop = false,
      withCloseButton = true,
      ...rest
    },
    ref
  ) => {
    return (
      <Dialog
        backdrop={
          withBackdrop ? (
            <Backdrop hideOnInteractOutside={hideOnInteractOutside as boolean} />
          ) : (
            false
          )
        }
        hideOnInteractOutside={hideOnInteractOutside}
        modal={withBackdrop}
        ref={ref}
        render={<div className={cx('root', `placement-${placement}`, `size-${size}`, className)} />}
        store={store}
        {...(rest as DialogProps<'div'>)}
      >
        <>
          {withCloseButton ? <Close /> : null}
          {children}
        </>
      </Dialog>
    )
  }
)

DrawerComponent.displayName = 'Drawer'

export const Drawer = Object.assign(DrawerComponent, {
  Backdrop,
  Close,
  Content,
  Footer,
  Title,
  Trigger,
})

export { useDialogStore as useDrawer } from '@ariakit/react'

export const AssetDrawer = Object.assign(AssetDrawerComponent, { Header, Trigger })
