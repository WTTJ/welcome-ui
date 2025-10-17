import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import type { TextProps } from '@/components/Text/types'
import { classNames } from '@/utils'

import type { IconProps } from '../Icon/types'

import styles from './avatar.module.scss'
import type { AvatarProps } from './types'
import { getInitials as defaultGetInitials, getColorFromName } from './utils'

const cx = classNames(styles)

const iconSizes: { [size in AvatarProps['size']]: IconProps['size'] } = {
  lg: 'xxl',
  md: 'lg',
  sm: 'md',
  xs: 'sm',
}

const textVariants: { [size in AvatarProps['size']]: TextProps['variant'] } = {
  lg: 'label-xl',
  md: 'label-xl',
  sm: 'label-lg',
  xs: 'label-sm-strong',
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, getInitials = defaultGetInitials, name, size = 'md', src }, ref) => {
    // Get default color based on name length
    const color = getColorFromName(name)
    // Show an user icon when there is no src and no name
    const hasPlaceholder = !src && !name

    return (
      <div
        aria-label={name}
        className={cx(
          'root',
          `size-${size}`,
          color && `background-${color}`,
          hasPlaceholder && `placeholder`,
          className
        )}
        ref={ref}
        role="img"
      >
        {hasPlaceholder ? (
          <Icon className={cx('placeholder-icon')} name="user" size={iconSizes[size]} />
        ) : null}
        {src ? <img alt={name} src={src} /> : null}
        {!src && name ? (
          <Text as="span" className={cx('initials')} variant={textVariants[size]}>
            {getInitials(name, size)}
          </Text>
        ) : null}
      </div>
    )
  }
)
