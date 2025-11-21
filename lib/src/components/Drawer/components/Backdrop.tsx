import { forwardRef } from 'react'

import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { BackdropProps } from '../types'

const cx = classNames(styles)

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ hideOnInteractOutside = true, ...rest }, ref) => {
    return (
      <div
        className={cx('backdrop', hideOnInteractOutside && `drawer-hide-on-interact-outside`)}
        ref={ref}
        {...rest}
      />
    )
  }
)

Backdrop.displayName = 'Drawer.Backdrop'
