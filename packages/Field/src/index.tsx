import React from 'react'
import { Label } from '@welcome-ui/label'
import { Hint } from '@welcome-ui/hint'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { useIsomorphicLayoutEffect } from '@welcome-ui/utils'
import { VariantIcon } from '@welcome-ui/variant-icon'

import * as S from './styles'
import { forwardedProps, generateRandomId, getBaseType, getVariant } from './utils'

export type VariantProps = {
  error?: string | JSX.Element
  info?: string | JSX.Element
  success?: string | JSX.Element
  warning?: string | JSX.Element
}

export interface FieldOptions extends VariantProps {
  children: JSX.Element
  disabled?: boolean
  disabledIcon?: JSX.Element
  hint?: string | JSX.Element
  label?: string | JSX.Element
  required?: boolean
  transparent?: boolean
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
      info,
      label,
      required,
      success,
      transparent,
      warning,
      ...rest
    },
    ref
  ) => {
    const baseType = getBaseType(children.props.type || children.type.displayName)
    const isRadio = baseType === 'radio'
    const isRadioGroup = baseType === 'RadioGroup'
    const isFieldGroup = baseType === 'FieldGroup'
    const isCheckbox = baseType === 'checkbox'
    const isToggle = children.type.displayName === 'Toggle'
    const isCheckable = isRadio || isCheckbox || isToggle
    const layout = flexDirection || (isCheckable ? 'row' : 'column')
    const isGroup = isFieldGroup || isRadioGroup
    const variant = getVariant({ error, warning, success, info })
    const hintText = variant ? error || warning || success || info : hint
    const withHintText = !!hintText
    const htmlFor = children.props.id || children.props.name || generateRandomId()

    const child = React.cloneElement(React.Children.only(children), {
      disabled,
      id: htmlFor,
      required,
      variant,
      transparent,
      ...(isGroup ? { flexDirection: layout } : {}),
    })

    useIsomorphicLayoutEffect(() => {
      Object.keys(children.props).forEach(prop => {
        if (forwardedProps.includes(prop)) {
          const element = document.getElementById(htmlFor)
          // eslint-disable-next-line no-console
          console.warn(`You must pass the "${prop}" prop to the <Field /> instead of`, element)
        }
      })
    }, [children.props, children.type.displayName, htmlFor])
    return (
      <S.Field
        ref={ref}
        {...rest}
        data-testid={dataTestId}
        isCheckable={isCheckable}
        isRadioGroup={isRadioGroup}
        withHintText={withHintText}
      >
        <S.Label>
          {isCheckable && child}
          <S.LabelWithHint>
            {label && (
              <Label
                checkableField={isCheckable}
                disabled={disabled}
                disabledIcon={disabledIcon}
                htmlFor={htmlFor}
                required={required}
                variant={variant}
                withDisabledIcon={!isCheckable}
              >
                {/* for a checkable field the variant icon is after input and before label text */}
                {isCheckable && <VariantIcon size="sm" variant={variant} />}
                {label}
              </Label>
            )}
            {/* for a checkable field we add a hint below label name */}
            {isCheckable && hintText && (
              <Hint
                checkableField
                dataTestId={dataTestId ? `${dataTestId}-hint` : undefined}
                mt="0"
                variant={variant}
              >
                {hintText}
              </Hint>
            )}
          </S.LabelWithHint>
        </S.Label>
        {!isCheckable && child}
        {!isCheckable && hintText && (
          <Hint dataTestId={dataTestId ? `${dataTestId}-hint` : undefined} variant={variant}>
            {hintText}
          </Hint>
        )}
      </S.Field>
    )
  }
)

Field.displayName = 'Field'

export const IconWrapper = S.IconWrapper
export const IconGroupWrapper = S.IconGroupWrapper
export { getBaseType }
