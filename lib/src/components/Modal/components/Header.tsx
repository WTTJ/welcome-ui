import { forwardRef } from 'react'

import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { HeaderProps } from '../types'

import { Close } from './Close'

const cx = classNames(modalStyles)

/**
 * @name Modal.Header
 */
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ icon, subtitle, title, ...rest }, ref) => {
    return (
      <header className={cx('header')} ref={ref} {...rest}>
        <Close isOnHeader />
        {icon}
        <Text className={cx('header-title', icon && 'icon')} variant="h4">
          {title}
        </Text>
        {subtitle ? <Text className={cx('header-subtitle')}>{subtitle}</Text> : null}
      </header>
    )
  }
)

Header.displayName = 'Header'
