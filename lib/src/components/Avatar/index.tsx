import React from 'react'

import { classNames } from '@/utils'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'
import { Text } from '@old/Text'

import styles from './avatar.module.scss'
import type { Size } from './types'
import { getInitials as defaultGetInitials, getColorFromName } from './utils'

const cx = classNames(styles)

export interface AvatarOptions {
  className?: string
  getInitials?: (name: string) => string
  name: string
  size?: Size
  src?: string
}

export type AvatarProps = CreateWuiProps<'div', AvatarOptions>

export const colors = [
  'secondary-blue',
  'secondary-green',
  'secondary-orange',
  'secondary-pink',
  'secondary-teal',
  'secondary-violet',
] as const

export const Avatar: React.FC<AvatarProps> = forwardRef<'div', AvatarProps>(
  ({ className, getInitials = defaultGetInitials, name, size = 'md', src }, ref) => {
    // Get default color based on name length
    const color = getColorFromName(name)

    return (
      <div
        aria-label={name}
        className={cx('root', size && `size-${size}`, color && `background-${color}`, className)}
        ref={ref}
        role="img"
      >
        {src ? (
          <img alt={name} src={src} />
        ) : (
          <Text className="m-0" fontSize="inherit">
            {getInitials(name)}
          </Text>
        )}
      </div>
    )
  }
)
