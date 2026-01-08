import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import iconStampStyles from './icon-stamp.module.scss'
import type { IconStampProps } from './types'

const cx = classNames(iconStampStyles)

export const IconStamp = forwardRef<HTMLDivElement, IconStampProps>(
  ({ className, name, size = 'md', variant, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={cx('root', variant && `variant-${variant}`, size && `size-${size}`, className)}
        ref={ref}
      >
        <Icon name={name} size={size} />
      </div>
    )
  }
)

IconStamp.displayName = 'IconStamp'
