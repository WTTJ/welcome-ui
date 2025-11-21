import { forwardRef } from 'react'

import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import hintStyles from './hint.module.scss'
import type { HintProps } from './types'

const cx = classNames(hintStyles)

export const Hint = forwardRef<HTMLSpanElement, HintProps>(
  ({ children, className, variant, ...rest }, ref) => {
    return (
      <Text
        as="span"
        className={cx('root', variant && `variant-${variant}`, className)}
        ref={ref}
        role={variant === 'danger' ? 'alert' : undefined}
        variant="body-sm"
        {...rest}
      >
        {children}
      </Text>
    )
  }
)

Hint.displayName = 'Hint'
