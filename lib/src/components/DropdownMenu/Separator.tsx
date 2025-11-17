import { MenuSeparator } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'
import type { SeparatorProps } from './types'

const cx = classNames(dropdownMenuStyles)

export const Separator = forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuSeparator {...props} ref={ref} render={<hr className={cx('separator', className)} />} />
    )
  }
)
