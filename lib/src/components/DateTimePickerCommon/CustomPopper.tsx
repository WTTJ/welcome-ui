import React from 'react'

import { classNames } from '@/utils'

import styles from './date-time-picker.module.scss'

const cx = classNames(styles)

export const CustomPopper = ({ children }: { children: React.ReactElement }) => {
  if (!children) {
    return null
  }
  // Get any styles passed via `popperProps`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children: nested, className, modifiers, placement, ...popperProps } = children.props
  return (
    <div className={cx('picker-popper-root')} style={popperProps}>
      {children}
    </div>
  )
}

CustomPopper.displayName = 'DateTimePicker.CustomPopper'
