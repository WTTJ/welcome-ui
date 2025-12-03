import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import alertStyles from '../alert.module.scss'
import type { AlertTitleProps } from '../types'

const cx = classNames(alertStyles)

export const AlertTitle = ({ children, hasCloseButton, ...rest }: AlertTitleProps) => {
  return (
    <Text as="span" className={cx(hasCloseButton && 'title-close-button')} {...rest}>
      {children}
    </Text>
  )
}

AlertTitle.displayName = 'Alert.Title'
