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
    let text
    const isNumber = Number.isInteger(children)
    const textLength = children.toString().length
    const hasSingleCharacter = textLength === 1

    if (isNumber) {
      if (withNumberAbbreviation && (children as number) > 99) {
        text = '99+'
      } else {
        text = children
      }
    } else {
      text = children
    }

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
