import { forwardRef } from 'react'

import { Text } from '@/components/Text'
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
    const textVariant = size === 'lg' ? 'label-md-strong' : 'label-sm-strong'
    const isBadgeSmall = size === 'sm'

    return (
      <div
        {...rest}
        className={cx('root', `variant-${variant}`, `size-${size}`, className)}
        ref={ref}
      >
        {!isBadgeSmall && <Text variant={textVariant}>{text}</Text>}
      </div>
    )
  }
)

Badge.displayName = 'Badge'
