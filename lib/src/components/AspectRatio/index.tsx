import type { PolymorphicProps } from '@/theme/types'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import styles from './aspect-ratio.module.scss'

const cx = classNames(styles)

export type AspectRatioProps<T extends React.ElementType = 'div'> = PolymorphicProps<T> & {
  ratio?: number
}

export const AspectRatio = forwardRefWithAs<AspectRatioProps, 'div'>(
  ({ className, ratio = 4 / 3, ...rest }, ref) => {
    const style = { '--aspect-ratio': ratio } as React.CSSProperties

    return <div className={cx('root', className)} ref={ref} style={style} {...rest} />
  }
)

AspectRatio.displayName = 'AspectRatio'
