import { Label } from '@/components/Label'
import { classNames, forwardRefWithAs } from '@/utils'

import fieldGroupStyles from './field-group.module.scss'
import type { FieldGroupProps } from './types'

const cx = classNames(fieldGroupStyles)

export const FieldGroup = forwardRefWithAs<FieldGroupProps, 'fieldset'>(
  ({ children, className, label, required, ...rest }, ref) => (
    <fieldset className={cx('root', className)} ref={ref} {...rest}>
      {label ? (
        <Label as="legend" required={required}>
          {label}
        </Label>
      ) : null}
      {children}
    </fieldset>
  )
)
