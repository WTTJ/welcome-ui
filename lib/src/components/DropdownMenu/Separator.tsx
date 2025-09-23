import * as Ariakit from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'

const cx = classNames(dropdownMenuStyles)

export type SeparatorProps = Ariakit.MenuSeparatorProps

export const Separator = forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <Ariakit.MenuSeparator
        ref={ref}
        render={<hr className={cx('separator', className)} />}
        {...props}
      />
    )
  }
)
