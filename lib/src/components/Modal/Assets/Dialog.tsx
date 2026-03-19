import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'

const cx = classNames(modalStyles)

export const Dialog = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('root', 'dialog', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

Dialog.displayName = 'AssetModal'
