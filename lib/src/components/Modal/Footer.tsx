import { forwardRef, type HTMLAttributes } from 'react'

import { Text } from '@/components/Text'
import { classNames } from '@/utils/classNames'
import type { MergeProps } from '@/utils/forwardRefWithAs'

import modalStyles from './modal.module.scss'

export interface FooterOptions {
  information?: {
    subtitle: string
    title: string
  }
}

export type FooterProps = MergeProps<FooterOptions, HTMLAttributes<HTMLDivElement>>

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
            <Text className="font-bold text-(--color-neutral-90)" variant="subtitle-sm">
              {information.title}
            </Text>
            <Text className="text-(--color-neutral-90) mb-0 mt-(--spacing-md)" variant="sm">
              {information.subtitle}
            </Text>
          </div>
        ) : null}
      </footer>
    )
  }
)

Footer.displayName = 'Footer'
