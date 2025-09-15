import { LockIcon } from '@old/Icons'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'
import { wrapChildren } from '@old/utils'
import { VariantIcon } from '@old/VariantIcon'

import * as S from './styles'

export interface LabelOptions {
  checkableField?: boolean
  disabled?: boolean
  disabledIcon?: JSX.Element
  htmlFor?: string
  icon?: JSX.Element
  required?: boolean
  variant?: 'danger' | 'success' | 'warning'
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
        {disabled && withDisabledIcon ? (
          <S.Disabled>{disabledIcon || <LockIcon size="sm" />}</S.Disabled>
        ) : null}
        {content}
      </S.Label>
    )
  }
)

Label.displayName = 'Label'

export const StyledLabel = S.Label
