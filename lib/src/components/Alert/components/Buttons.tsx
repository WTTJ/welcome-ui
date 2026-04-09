import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { forwardRefWithAs } from '@/utils'
import { classNames } from '@/utils'

import alertStyles from '../alert.module.scss'

const cx = classNames(alertStyles)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
export const AlertButton = forwardRefWithAs<Omit<ButtonProps, 'size'>, 'button'>(
  ({ variant = 'primary', ...props }, ref) => (
    <Button className={cx('alert-buttons')} ref={ref} variant={variant} {...props} />
  )
)

export const AlertSecondaryButton = forwardRefWithAs<Omit<ButtonProps, 'size'>, 'button'>(
  ({ variant = 'secondary', ...props }, ref) => (
    <Button className={cx('alert-buttons')} ref={ref} variant={variant} {...props} />
  )
)

AlertButton.displayName = 'Alert.Button'
AlertSecondaryButton.displayName = 'Alert.SecondaryButton'
