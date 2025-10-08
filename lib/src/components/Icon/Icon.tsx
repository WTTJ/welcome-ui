import { forwardRef } from 'react'

import { classNames } from '@/utils'

import iconStyles from './icon.module.scss'
import type { IconProps } from './Icon.types'

const cx = classNames(iconStyles)

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ 'aria-label': ariaLabel, className, name, size = 'md', ...rest }, ref) => {
    return (
      <svg
        aria-hidden={ariaLabel ? 'false' : 'true'}
        aria-label={ariaLabel}
        className={cx('root', `size-${size}`, className)}
        ref={ref}
        role={ariaLabel ? 'img' : undefined}
        {...rest}
      >
        <use href={`#${name}`} />
      </svg>
    )
  }
)
