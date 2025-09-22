import { forwardRef } from 'react'

import { classNames } from '@/utils'

import badgeStyles from './badge.module.scss'
import type { BadgeProps } from './types'

const cx = classNames(badgeStyles)

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, disabled, size = 'md', variant = 'default', withNumberAbbreviation, ...rest },
    ref
  ) => {
    const isNumber = Number.isInteger(children)
    const textLength = children.toString().length
    const hasSingleCharacter = textLength === 1
    const shouldUseAbbreviation = isNumber && withNumberAbbreviation && (children as number) > 99
    const text = shouldUseAbbreviation ? '99+' : children

    return (
      <div
        {...rest}
        className={cx(
          'root',
          disabled ? `disabled-${variant}` : `variant-${variant}`,
          `size-${size}`,
          hasSingleCharacter && `rounded-${size}`
        )}
        ref={ref}
      >
        {text}
      </div>
    )
  }
)

Badge.displayName = 'Badge'
