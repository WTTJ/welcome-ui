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
      <header className={cx('header', icon && 'icon')} ref={ref} {...rest}>
        <Close />
        {icon}
        <Text as="h4" className={cx('header-title')} variant="heading-md-strong">
          {title}
        </Text>
        {subtitle ? <Text className={cx('header-subtitle')}>{subtitle}</Text> : null}
      </header>
    )
  }
)
