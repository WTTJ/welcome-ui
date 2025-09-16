import { classNames } from '@/utils'

import type { VariantIconProps } from './types'
import variantIconStyles from './variant-icon.module.scss'

const cx = classNames(variantIconStyles)

export const VariantIcon = ({
  className,
  size = 'md',
  variant = 'default',
  ...rest
}: VariantIconProps) => {
  let icon = 'promote'

  switch (variant) {
    case 'ai':
      icon = 'sparkles'
      break
    case 'danger':
      icon = 'alert'
      break
    case 'info':
      icon = 'information'
      break
    case 'success':
      icon = 'check'
      break
    case 'warning':
      icon = 'alert'
      break
    default:
      break
  }

  return (
    <div {...rest} className={cx('root', `variant-${variant}`, `size-${size}`, className)}>
      {/* TODO: remove this to use Icon component when available */}
      <i className={`wui-icon-${icon} wui-icon`} />
    </div>
  )
}
