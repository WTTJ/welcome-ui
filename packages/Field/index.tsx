import React, { Fragment, useLayoutEffect } from 'react'
import { Label } from '@welcome-ui/label'
import { Hint } from '@welcome-ui/hint'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

// Fields
import { RowContainer } from './layout'
import * as S from './styles'
import { forwardedProps, generateRandomId, getBaseType, getVariant } from './utils'

export interface FieldOptions {
  children: JSX.Element
  disabled?: boolean
  disabledIcon?: JSX.Element
  error?: string | JSX.Element
  label?: string | JSX.Element
  hint?: string | JSX.Element
  required?: boolean
  warning?: string | JSX.Element
}

export type FieldProps = CreateWuiProps<'div', FieldOptions>

export const Field = forwardRef<'div', FieldProps>(
  (
    {
      children,
      dataTestId,
      disabled,
      disabledIcon,
      error,
      flexDirection,
      hint,
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
    const isGroup = ['FieldGroup', 'RadioGroup'].includes(baseType)
    const Container = layout === 'row' ? RowContainer : Fragment
    const variant = getVariant({ error, warning })
    const hintText = variant ? error || warning : hint
    const htmlFor = children.props.id || children.props.name || generateRandomId()

    const child = React.cloneElement(React.Children.only(children), {
      disabled,
      id: htmlFor,
      required,
      variant,
      ...(isGroup ? { label, flexDirection: layout } : {}),
    })

    useLayoutEffect(() => {
      Object.keys(children.props).forEach(prop => {
        if (forwardedProps.includes(prop)) {
          const element = document.getElementById(htmlFor)
          // eslint-disable-next-line no-console
          console.warn(`You must pass the "${prop}" prop to the <Field /> instead of`, element)
        }
      })
    }, [children.props, children.type.displayName, htmlFor])

    return (
      <S.Field ref={ref} {...rest} data-testid={dataTestId} flexDirection={layout}>
        <Container>
          {label && !isGroup && (
            <Label
              disabled={disabled}
              disabledIcon={disabledIcon}
              htmlFor={htmlFor}
              required={required}
              variant={variant}
              withDisabledIcon={!isToggle}
            >
              {isCheckable && child}
              {label}
            </Label>
          )}
          {!isCheckable && child}
        </Container>
        {hintText && (
          <Hint checkableField={isCheckable} variant={variant}>
            {hintText}
          </Hint>
        )}
      </S.Field>
    )
  }
)

Field.displayName = 'Field'

export const IconWrapper = S.IconWrapper
export { getBaseType }
