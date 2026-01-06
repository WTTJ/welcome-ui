import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import styles from './aspect-ratio.module.scss'
import type { AspectRatioProps } from './types'

const cx = classNames(styles)

export const AspectRatio = forwardRefWithAs<AspectRatioProps, 'div'>(
  ({ as: Component = 'div', className, ratio = '4-3', ...rest }, ref) => {
    return <Component className={cx('root', `ratio-${ratio}`, className)} ref={ref} {...rest} />
  }
)

AspectRatio.displayName = 'AspectRatio'
