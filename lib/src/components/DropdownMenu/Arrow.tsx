import { MenuArrow, useMenuContext, useStoreState } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'
import type { ArrowProps } from './types'

const cx = classNames(dropdownMenuStyles)

export const Arrow = forwardRef<HTMLDivElement, ArrowProps>(
  ({ className, store: parentStore, ...props }, ref) => {
    const contextStore = useMenuContext()
    const store = parentStore ?? contextStore
    const currentPlacement = useStoreState(store, 'currentPlacement')
    const [placement] = currentPlacement.split('-')

    return (
      <MenuArrow
        {...props}
        ref={ref}
        render={
          <div className={cx('arrow', className)}>
            <svg
              className={cx('arrow-item', placement && `arrow-placement-${placement}`)}
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 30L15 22L23 30H7Z" fill="currentColor" fillRule="nonzero" id="stroke" />
              <path d="M8 30L15 23L22 30H8Z" fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        }
        size={32}
        store={store}
      />
    )
  }
)

Arrow.displayName = 'DropdownMenu.Arrow'
