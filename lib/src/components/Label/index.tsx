import { forwardRef } from 'react'

import { LockIcon } from '@/components/Icon'
import { VariantIcon } from '@/components/VariantIcon'
import { classNames } from '@/utils'

import labelStyles from './label.module.scss'
import type { LabelProps } from './types'

const cx = classNames(labelStyles)

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, disabled, required, variant, ...rest }, ref) => {
    return (
      <label className={cx('root', className)} ref={ref} {...rest}>
        {variant ? <VariantIcon size="sm" variant={variant} /> : null}
        {disabled ? <LockIcon size="sm" /> : null}
        {children}
        {required ? <span className={cx('required')}>*</span> : null}
      </label>
    )
  }
)
