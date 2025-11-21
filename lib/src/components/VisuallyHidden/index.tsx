import { classNames, forwardRefWithAs } from '@/utils'

import type { VisuallyHiddenProps } from './types'
import styles from './visually-hidden.module.scss'

const cx = classNames(styles)

export const VisuallyHidden = forwardRefWithAs<VisuallyHiddenProps, 'span'>(
  ({ as: Element = 'span', children }, ref) => {
    return (
      <Element className={cx('root')} ref={ref}>
        {children}
      </Element>
    )
  }
)

VisuallyHidden.displayName = 'VisuallyHidden'
