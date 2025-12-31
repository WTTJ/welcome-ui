import type { DialogProps } from '@ariakit/react'
import { Dialog } from '@ariakit/react'
import { forwardRef, useCallback } from 'react'

import { Window } from '@/components/Window'
import { classNames } from '@/utils'

import { AssetDrawerComponent } from './AssetDrawer'
import { Header } from './AssetDrawer/Header'
import { Backdrop } from './components/Backdrop'
import { Close } from './components/Close'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Media } from './components/Media'
import { Trigger } from './components/Trigger'
import styles from './drawer.module.scss'
import type { DrawerProps } from './types'

const cx = classNames(styles)

const DrawerComponent = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      className,
      fullscreen = false,
      getPersistentElements: parentGetPersistentElements,
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
    const getPersistentElements = useCallback(
      () =>
        Array.from(
          parentGetPersistentElements
            ? parentGetPersistentElements()
            : document.querySelectorAll('[data-wui-persistent]')
        ),
      [parentGetPersistentElements]
    )

    const hideOnInteractOutsideFn = useCallback(
      (event: Event) => {
        if (!hideOnInteractOutside) return false

        const target = event.target as HTMLElement
        const isTargetWithinPersistentElements = getPersistentElements().some(element =>
          element.contains(target)
        )
        return !isTargetWithinPersistentElements
      },
      [getPersistentElements, hideOnInteractOutside]
    )

    return (
      <Dialog
        backdrop={
          withBackdrop ? (
            <Backdrop hideOnInteractOutside={hideOnInteractOutside as boolean} />
          ) : (
            false
          )
        }
        getPersistentElements={getPersistentElements}
        hideOnInteractOutside={hideOnInteractOutsideFn}
        modal={withBackdrop}
        ref={ref}
        render={
          <div
            className={cx(
              'root',
              `placement-${placement}`,
              `size-${size}`,
              fullscreen && 'fullscreen',
              className
            )}
          />
        }
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
  Body: Window.Body,
  BoxText: Window.BoxText,
  Close,
  Content,
  Footer,
  Header: Window.Header,
  Media: Media,
  Trigger,
  WindowTabPanel: Window.TabPanel,
})

export { useDialogStore as useDrawer } from '@ariakit/react'

export const AssetDrawer = Object.assign(AssetDrawerComponent, { Header, Trigger })
