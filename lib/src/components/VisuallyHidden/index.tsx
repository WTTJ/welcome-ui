import { classNames, forwardRefWithAs } from '@/utils'

import type { VisuallyHiddenProps } from './types'
import styles from './visually-hidden.module.scss'

export { styles as visuallyHiddenClasses }

const cx = classNames(styles)

export const VisuallyHidden = forwardRefWithAs<VisuallyHiddenProps, 'span'>(
  ({ as: Component = 'span', children }, ref) => {
    return (
      <Component className={cx('root')} ref={ref}>
        {children}
      </Component>
    )
  }
)

VisuallyHidden.displayName = 'VisuallyHidden'
