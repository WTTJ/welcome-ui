import { Text } from '@/components/Text'
import type { TextProps } from '@/components/Text/types'
import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'

const cx = classNames(modalStyles)

export const AssetTitle = ({ children, className, ...rest }: TextProps) => {
  return (
    <Text as="p" className={cx('asset-title', className)} lines={2} variant="h4" {...rest}>
      {children}
    </Text>
  )
}
