import { forwardRef } from 'react'

import { Close } from '@/components/Modal/components/Close'
import modalStyles from '@/components/Modal/modal.module.scss'
import type { HeaderProps } from '@/components/Modal/types'
import { Text } from '@/components/Text'
import { classNames } from '@/utils/classNames'

const cx = classNames(modalStyles)

/**
 * @name Modal.Header
 */
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ icon, subtitle, title, ...rest }, ref) => {
    //FIXME text-center no longer works because icons are display block
    // shold be nline block or should i make the header a display flex
    return (
      <header className={cx('header', icon && 'text-center')} ref={ref} {...rest}>
        <Close isOnHeader />
        {icon}
        <Text
          className={`${subtitle && 'mb-(--spacing-lg)'} ${icon && 'mt-(--spacing-xl)'}`}
          variant="h4"
        >
          {title}
        </Text>
        {subtitle ? <Text className={cx('header-subtitle')}>{subtitle}</Text> : null}
      </header>
    )
  }
)

Header.displayName = 'Header'
