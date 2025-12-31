import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { ContentProps } from '../types'

const cx = classNames(styles)

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, iconName, subtitle, title, ...rest }, ref) => {
    const hasHeader = Boolean(iconName || title)
    return (
      <div className={cx('content', className)} ref={ref} {...rest}>
        {hasHeader ? (
          <div className={cx('content-header')}>
            {iconName ? <Icon name={iconName} size="lg" /> : null}
            {title ? <Text variant="heading-md-strong">{title}</Text> : null}
          </div>
        ) : null}
        {subtitle ? (
          <Text className={cx('content-header-subtitle')} variant="body-lg">
            {subtitle}
          </Text>
        ) : null}
        {children}
      </div>
    )
  }
)

Content.displayName = 'Drawer.Content'
