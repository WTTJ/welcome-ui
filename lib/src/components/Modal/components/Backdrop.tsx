import { cloneElement, forwardRef, isValidElement } from 'react'

import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { BackdropProps } from '../types'

const cx = classNames(modalStyles)

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ backdrop, hideOnInteractOutside, ...rest }, ref) => {
    if (backdrop === true) {
      return (
        <div
          className={cx('backdrop', hideOnInteractOutside && 'hideOnInteractOutside')}
          ref={ref}
          {...rest}
        />
      )
    }

    if (isValidElement(backdrop)) {
      return cloneElement(backdrop, { ref, ...rest })
    }

    return null
  }
)
