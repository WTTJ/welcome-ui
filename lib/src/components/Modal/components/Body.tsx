import { forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import modalStyles from '@/components/Modal/modal.module.scss'
import type { BodyProps } from '@/components/Modal/types'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

const cx = classNames(modalStyles)

export const Body = forwardRef<HTMLElement, BodyProps>(
  ({ children, className, iconName, subtitle, title, ...rest }, ref) => {
    const hasHeader = Boolean(iconName || title)
    return (
      <section className={cx('body', className)} ref={ref} {...rest}>
        {hasHeader ? (
          <div className={cx('body-header')}>
            {iconName ? <Icon name={iconName} size="lg" /> : null}
            {title ? <Text variant="heading-md-strong">{title}</Text> : null}
          </div>
        ) : null}
        {subtitle ? (
          <Text className={cx('body-header-subtitle')} variant="body-lg">
            {subtitle}
          </Text>
        ) : null}
        {children}
      </section>
    )
  }
)

Body.displayName = 'Modal.Body'
