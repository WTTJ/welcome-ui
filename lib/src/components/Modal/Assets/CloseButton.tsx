import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'
const cx = classNames(modalStyles)

export const CloseButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button className={cx('close-button')} variant="primary-neutral" {...rest}>
      {children}
    </Button>
  )
}
