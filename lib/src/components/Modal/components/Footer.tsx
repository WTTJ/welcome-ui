import { forwardRef } from 'react'

import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'
import type { FooterProps } from '../types'

const cx = classNames(modalStyles)

/**
 * @name Modal.Footer
 */
export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, information, ...rest }, ref) => {
    return (
      <footer className={cx('footer')} ref={ref} {...rest}>
        {children ? <div className={cx('footer-children-wrapper')}>{children}</div> : null}
        {information ? (
          <div className={cx('footer-information')}>
            <Text className={cx('footer-information-title')} variant="label-md">
              {information.title}
            </Text>
            <Text className={cx('footer-information-subtitle')} variant="body-md">
              {information.subtitle}
            </Text>
          </div>
        ) : null}
      </footer>
    )
  }
)

Footer.displayName = 'Modal.Footer'
