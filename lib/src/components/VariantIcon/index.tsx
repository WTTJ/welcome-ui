import { forwardRef } from 'react'

import type { IconProps } from '@/components/Icon'
import {
  AlertIcon,
  CheckIcon,
  InformationIcon,
  PromoteIcon,
  SparklesIcon,
  SquareAlertIcon,
} from '@/components/Icon'
import { classNames } from '@/utils'

import type { VariantIconProps } from './types'
import variantIconStyles from './variant-icon.module.scss'

const cx = classNames(variantIconStyles)

export const VariantIcon = forwardRef<HTMLDivElement, VariantIconProps>(
  ({ className, size = 'md', variant, ...rest }, ref) => {
    const iconMap: { [key in VariantIconProps['variant']]: React.FC<IconProps> } = {
      ai: SparklesIcon,
      danger: SquareAlertIcon,
      info: InformationIcon,
      success: CheckIcon,
      warning: AlertIcon,
    }

    const IconComponent = iconMap[variant] || PromoteIcon

    return (
      <div
        {...rest}
        className={cx('root', variant && `variant-${variant}`, `size-${size}`, className)}
        ref={ref}
      >
        <IconComponent size={size} />
      </div>
    )
  }
)
