import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import styles from '../drawer.module.scss'
import type { TitleProps } from '../types'

const cx = classNames(styles)

export const Title = ({ children, className, ...rest }: TitleProps) => {
  return (
    <div className={cx('title', className)} {...rest}>
      <Text className="w-full" variant="h3">
        {children}
      </Text>
    </div>
  )
}
