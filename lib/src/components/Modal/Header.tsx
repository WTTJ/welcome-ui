import { forwardRef, type HTMLAttributes, type ReactElement } from 'react'

import { Text } from '@/components/Text'
import { classNames } from '@/utils/classNames'
import type { MergeProps } from '@/utils/forwardRefWithAs'

import { Close } from './Close'
import modalStyles from './modal.module.scss'

export interface HeaderOptions {
  icon?: ReactElement
  subtitle?: JSX.Element | string
  title: JSX.Element | string
}

export type HeaderProps = MergeProps<HeaderOptions, HTMLAttributes<HTMLDivElement>>

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
        {subtitle ? <div className={cx('header-subtitle')}>{subtitle}</div> : null}
      </header>
    )
  }
)

Header.displayName = 'Header'
