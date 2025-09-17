import { forwardRef } from 'react'

import { classNames } from '@/utils'

import iconStyles from './icon.module.scss'
import type { IconProps } from './Icon.types'

const cx = classNames(iconStyles)

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ alt, className, content, size = 'md', ...rest }, ref) => {
    if (!content) {
      return null
    }

    return (
      <svg
        aria-label={alt}
        className={cx('root', `size-${size}`, className)}
        ref={ref}
        role="img"
        viewBox={content.viewBox || '0 0 100 100'}
        {...rest}
      >
        <title id={`icon-${alt}`}>{alt}</title>
        <g dangerouslySetInnerHTML={{ __html: content.block || '' }} />
      </svg>
    )
  }
)

export default Icon
