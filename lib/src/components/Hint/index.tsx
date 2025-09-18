import { forwardRef } from 'react'

import { classNames } from '@/utils'

import hintStyles from './hint.module.scss'
import type { HintProps } from './types'

const cx = classNames(hintStyles)

export const Hint = forwardRef<HTMLSpanElement, HintProps>(
  ({ children, className, variant, ...rest }, ref) => {
    return (
      <span className={cx('root', variant && `variant-${variant}`, className)} ref={ref} {...rest}>
        {children}
      </span>
    )
  }
)
