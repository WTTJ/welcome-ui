import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import type { VariantIconProps } from './types'
import variantIconStyles from './variant-icon.module.scss'

const cx = classNames(variantIconStyles)

export const VariantIcon = forwardRef<HTMLDivElement, VariantIconProps>(
  ({ className, size = 'md', variant, ...rest }, ref) => {
    const iconMap: { [key in VariantIconProps['variant']]: string } = {
      ai: 'sparkles',
      danger: 'exclamation-circle',
      info: 'information-circle',
      success: 'check-circle',
      warning: 'exclamation-octogon',
    }

    return (
      <div {...rest} className={cx('root', variant && `variant-${variant}`, className)} ref={ref}>
        <Icon name={iconMap[variant]} size={size} />
      </div>
    )
  }
)
