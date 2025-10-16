import { forwardRef } from 'react'

import { classNames } from '@/utils'

import badgeStyles from './badge.module.scss'
import type { BadgeProps } from './types'

const cx = classNames(badgeStyles)

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, className, size = 'md', variant = 'warm', withNumberAbbreviation, ...rest },
    ref
  ) => {
    const isNumber = Number.isInteger(children)
    const shouldUseAbbreviation = isNumber && withNumberAbbreviation && (children as number) > 99
    const text = shouldUseAbbreviation ? '99+' : children

    return (
      <div
        {...rest}
        className={cx('root', `variant-${variant}`, `size-${size}`, className)}
        ref={ref}
      >
        {text}
      </div>
    )
  }
)

Badge.displayName = 'Badge'
