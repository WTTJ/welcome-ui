import React, { Fragment } from 'react'
import { Label } from '@welcome-ui/label'
import { Hint } from '@welcome-ui/hint'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

// Fields
import { RowContainer } from './layout'
import * as S from './styles'
import { getBaseType, getVariant } from './utils'

export type Size = 'sm' | 'md' | 'lg'

type FieldOptions = {
  children: JSX.Element
  disabled?: boolean
  disabledIcon?: JSX.Element
  error?: string | JSX.Element
  id: string
  label?: string
  hint?: string
  required?: boolean
  warning?: string | JSX.Element
}

type FieldProps = CreateWuiProps<'div', FieldOptions>

export const Field = forwardRef<'div', FieldProps>(
  (
    {
      children,
      disabled,
      disabledIcon,
      error,
      flexDirection,
      hint,
      id,
      label,
      required,
      warning,
      ...rest
    },
    ref
  ) => {
    const baseType = getBaseType(children.props.type || children.type.displayName)
    const isRadio = baseType === 'radio'
    const isToggle = children.type.displayName === 'Toggle'
    const isCheckbox = baseType === 'checkbox'
    const isCheckable = isRadio || isCheckbox
    const layout = flexDirection || (isCheckable ? 'row' : 'column')
    const Container = layout === 'row' ? RowContainer : Fragment
    const variant = getVariant({ error, warning })

    const child = React.cloneElement(React.Children.only(children), {
      disabled,
      variant,
      required,
      id,
    })

    return (
      <S.Field ref={ref} {...rest} flexDirection={layout}>
        <Container>
          {isCheckable && child}
          {label && (
            <Label
              disabled={disabled}
              disabledIcon={disabledIcon}
              htmlFor={id}
              required={required}
              variant={variant}
              withDisabledIcon={!isToggle}
            >
              {label}
            </Label>
          )}
          {!isCheckable && child}
        </Container>
        {hint && (
          <Hint checkableField={isCheckable} variant={variant}>
            {hint}
          </Hint>
        )}
      </S.Field>
    )
  }
)

Field.displayName = 'Field'

export const IconWrapper = S.IconWrapper
export { getBaseType }
