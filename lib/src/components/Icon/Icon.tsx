import { forwardRef } from 'react'

import { classNames } from '@/utils'

import iconStyles from './icon.module.scss'
import type { IconProps } from './Icon.types'

const cx = classNames(iconStyles)

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ 'aria-label': ariaLabel, className, content, size = 'md', ...rest }, ref) => {
    if (!content) {
      return null
    }

    return (
      <svg
        aria-hidden={ariaLabel ? 'false' : 'true'}
        aria-label={ariaLabel}
        className={cx('root', `size-${size}`, className)}
        ref={ref}
        role={ariaLabel ? 'img' : undefined}
        viewBox={content.viewBox || '0 0 100 100'}
        {...rest}
      >
        <g dangerouslySetInnerHTML={{ __html: content.block || '' }} />
      </svg>
    )
  }
)

export default Icon
