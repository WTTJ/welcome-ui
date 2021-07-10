import React, { forwardRef } from 'react'
import { LockIcon } from '@welcome-ui/icons.lock'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { wrapChildren } from '@welcome-ui/utils'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type Variant = 'error' | 'warning' | 'info' | 'success'

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  checkableField?: boolean
  disabled?: boolean
  dataTestId?: string
  disabledIcon?: JSX.Element
  icon?: JSX.Element
  variant?: Variant
  required?: boolean
  withDisabledIcon?: boolean
}

export const Label = forwardRef<HTMLLabelElement, LabelProps & WuiProps>(
  (
    {
      checkableField,
      children,
      dataTestId,
      disabled,
      disabledIcon,
      icon,
      variant,
      withDisabledIcon = true,
      ...rest
    },
    ref
  ) => {
    // Wrap strings in span to allow for required asterisk
    const content = wrapChildren(children as JSX.Element)

    return (
      <S.Label
        data-testid={dataTestId}
        disabled={disabled}
        disabledIcon={disabledIcon}
        ref={ref}
        variant={variant}
        {...rest}
      >
        {!checkableField && <VariantIcon icon={icon} variant={variant} />}
        {disabled && withDisabledIcon && <S.Disabled>{disabledIcon || <LockIcon />}</S.Disabled>}
        {content}
      </S.Label>
    )
  }
)

Label.displayName = 'Label'

export const StyledLabel = S.Label
