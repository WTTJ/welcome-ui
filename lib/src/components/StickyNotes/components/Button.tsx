import { Button as WUIButton } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'
import { classNames } from '@/utils'

import styles from '../sticky-notes.module.scss'

const cx = classNames(styles)

// We force size="sm" and variant="primary-neutral" for consistency and alignment on bottom
export const Button = ({ children, ...rest }: Omit<ButtonProps, 'size' | 'variant'>) => {
  return (
    <WUIButton className={cx('action')} size="sm" variant="primary-neutral" {...rest}>
      {children}
    </WUIButton>
  )
}
