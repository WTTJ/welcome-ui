import { forwardRef } from 'react'

import { classNames } from '@/utils'

import checkeredPaperStyles from './checkered-paper.module.scss'
import type { CheckeredPaperProps } from './types'

const cx = classNames(checkeredPaperStyles)

export const CheckeredPaper = forwardRef<HTMLDivElement, CheckeredPaperProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cx('root', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

CheckeredPaper.displayName = 'CheckeredPaper'
