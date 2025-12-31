import { forwardRef } from 'react'

import { Label } from '@/components/Label'
import { classNames } from '@/utils'

import fieldGroupStyles from './field-group.module.scss'
import type { FieldGroupProps } from './types'

const cx = classNames(fieldGroupStyles)

export const FieldGroup = forwardRef<HTMLFieldSetElement, FieldGroupProps>(
  ({ children, className, hideLabel, label, required, ...rest }, ref) => (
    <fieldset className={cx('root', className)} ref={ref} {...rest}>
      <Label as="legend" className={cx(hideLabel && 'visually-hidden')} required={required}>
        {label}
      </Label>
      {children}
    </fieldset>
  )
)

FieldGroup.displayName = 'FieldGroup'
