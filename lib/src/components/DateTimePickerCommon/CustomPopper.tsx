import type { HTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from '@/utils'

import dateTimePickerCommonStyles from './date-time-picker-common.module.scss'

const cx = classNames(dateTimePickerCommonStyles)

export const CustomPopper = ({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  if (!children) {
    return null
  }

  return <div className={cx('custom-popper', className)}>{children}</div>
}
