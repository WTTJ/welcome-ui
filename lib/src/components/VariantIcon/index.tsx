import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import type { IconName } from '@/components/Icon/types'
import { classNames } from '@/utils'

import type { VariantIconProps } from './types'
import variantIconStyles from './variant-icon.module.scss'

const cx = classNames(variantIconStyles)

export const VariantIcon = forwardRef<HTMLDivElement, VariantIconProps>(
  ({ className, size = 'md', variant, ...rest }, ref) => {
    const iconMap: { [key in VariantIconProps['variant']]: string } = {
      ai: 'sparkles',
      danger: 'exclamation-octagon',
      info: 'info-circle',
      success: 'check-circle',
      warning: 'exclamation-circle',
    }
    const iconName = iconMap[variant] as IconName

    return (
      <div {...rest} className={cx('root', variant && `variant-${variant}`, className)} ref={ref}>
        <Icon name={iconName} size={size} />
      </div>
    )
  }
)
