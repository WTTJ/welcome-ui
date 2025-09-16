import { forwardRef } from 'react'

import { classNames } from '@/utils'

import type { VariantIconProps } from './types'
import variantIconStyles from './variant-icon.module.scss'

const cx = classNames(variantIconStyles)

export const VariantIcon = forwardRef<HTMLDivElement, VariantIconProps>(
  ({ className, size = 'md', variant = 'default', ...rest }, ref) => {
    const iconMap: { [key in VariantIconProps['variant']]: string } = {
      ai: 'sparkles',
      danger: 'alert',
      default: 'promote',
      info: 'information',
      success: 'check',
      warning: 'alert',
    }

    const icon = iconMap[variant]

    return (
      <div
        {...rest}
        className={cx('root', `variant-${variant}`, `size-${size}`, className)}
        ref={ref}
      >
        {/* TODO: remove this to use Icon component when available */}
        <i className={`wui-icon-${icon} wui-icon`} />
      </div>
    )
  }
)
