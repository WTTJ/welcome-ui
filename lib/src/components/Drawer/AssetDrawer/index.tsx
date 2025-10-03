import { useCallback } from 'react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { Drawer } from '../index'

import styles from './asset-drawer.module.scss'
import type { AssetDrawerProps } from './types'

const cx = classNames(styles)

export const AssetDrawerComponent = forwardRefWithAs<AssetDrawerProps, 'div'>(
  (
    {
      children,
      className,
      getPersistentElements: parentGetPersistentElements,
      maxWidth,
      store,
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
        const target = event.target as HTMLElement
        const isTargetWithinPersistentElements = getPersistentElements().some(element =>
          element.contains(target)
        )
        return !isTargetWithinPersistentElements
      },
      [getPersistentElements]
    )

    const drawerMaxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth

    return (
      <Drawer
        autoFocusOnShow={false}
        className={cx('asset-drawer', className)}
        getPersistentElements={getPersistentElements}
        hideOnInteractOutside={hideOnInteractOutsideFn}
        placement="bottom"
        ref={ref}
        store={store}
        withBackdrop
        {...rest}
      >
        <div className={cx('content-wrapper')}>
          <div
            className={cx('content-max-width')}
            style={{ '--asset-drawer-content-max-width': drawerMaxWidth } as React.CSSProperties}
          >
            <div className={cx('content')}>{children}</div>
          </div>
        </div>
      </Drawer>
    )
  }
)
