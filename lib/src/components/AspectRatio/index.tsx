import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import styles from './aspect-ratio.module.scss'
import type { AspectRatioProps } from './types'

const cx = classNames(styles)

export const AspectRatio = forwardRefWithAs<AspectRatioProps, 'div'>(
  ({ as, className, ratio = 4 / 3, ...rest }, ref) => {
    const style = { '--aspect-ratio': ratio } as React.CSSProperties

    const Element = as || 'div'

    return <Element className={cx('root', className)} ref={ref} style={style} {...rest} />
  }
)

AspectRatio.displayName = 'AspectRatio'
