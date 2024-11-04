import React from 'react'
import { LockIcon } from '@welcome-ui/icons'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { wrapChildren } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface LabelOptions {
  checkableField?: boolean
  disabled?: boolean
  disabledIcon?: JSX.Element
  htmlFor?: string
  icon?: JSX.Element
  required?: boolean
  variant?: 'info' | 'success' | 'danger' | 'warning'
  withDisabledIcon?: boolean
}

export type LabelProps = CreateWuiProps<'label', LabelOptions>

export const Label = forwardRef<'label', LabelProps>(
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
        {!checkableField && <VariantIcon icon={icon} size="sm" variant={variant} />}
        {disabled && withDisabledIcon && (
          <S.Disabled>{disabledIcon || <LockIcon size="sm" />}</S.Disabled>
        )}
        {content}
      </S.Label>
    )
  }
)

Label.displayName = 'Label'

export const StyledLabel = S.Label
