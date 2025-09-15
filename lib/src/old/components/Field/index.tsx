import React from 'react'

import { Hint } from '@old/Hint'
import { Label } from '@old/Label'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'
import { VariantIcon } from '@old/VariantIcon'

import { useIsomorphicLayoutEffect } from '../../../utils/use-isomorphic-layout-effect'

import * as S from './styles'
import { forwardedProps, generateRandomId, getBaseType, getVariant } from './utils'

export interface FieldOptions extends VariantProps {
  children: JSX.Element
  disabled?: boolean
  disabledIcon?: JSX.Element
  hint?: JSX.Element | string
  label?: JSX.Element | string
  required?: boolean
  transparent?: boolean
}

export type FieldProps = CreateWuiProps<'div', FieldOptions>

type VariantProps = {
  error?: JSX.Element | string
  success?: JSX.Element | string
  warning?: JSX.Element | string
}

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
    const variant = getVariant({ error, success, warning })
    const hintText = variant ? error || warning || success : hint
    const withHintText = !!hintText
    const htmlFor = children.props.id || children.props.name || generateRandomId()

    const child = React.cloneElement(React.Children.only(children), {
      disabled,
      id: htmlFor,
      required,
      transparent,
      variant,
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
          {isCheckable ? child : null}
          <S.LabelWithHint>
            {label ? (
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
                {isCheckable ? <VariantIcon size="sm" variant={variant} /> : null}
                {label}
              </Label>
            ) : null}
            {/* for a checkable field we add a hint below label name */}
            {isCheckable && hintText ? (
              <Hint
                checkableField
                dataTestId={dataTestId ? `${dataTestId}-hint` : undefined}
                mt="0"
                variant={variant}
              >
                {hintText}
              </Hint>
            ) : null}
          </S.LabelWithHint>
        </S.Label>
        {!isCheckable && child}
        {!isCheckable && hintText ? (
          <Hint dataTestId={dataTestId ? `${dataTestId}-hint` : undefined} variant={variant}>
            {hintText}
          </Hint>
        ) : null}
      </S.Field>
    )
  }
)

Field.displayName = 'Field'

export const IconWrapper = S.IconWrapper
export const IconGroupWrapper = S.IconGroupWrapper
export { getBaseType }
