import React, { forwardRef, Fragment } from 'react'
import { bool, func, node, string } from 'prop-types'

// Common
import { RowContainer } from '../../common/styles/layout'
import { getBaseType } from '../../utils/fields'
import { getHintText, getVariant } from '../../utils/variants'
import { COMPONENT_TYPE, DIRECTIONS_TYPE, INPUTS_TYPE, SIZES_TYPE } from '../../utils/propTypes'
// Components
import { Label } from '../Label'
import { Hint } from '../Hint'

// Fields
import * as S from './styles'

export const Field = forwardRef(
  (
    {
      checked,
      children,
      component: Component,
      connected,
      dataTestId,
      disabled,
      disabledIcon,
      error,
      flexDirection,
      hint,
      id,
      label,
      name,
      onChange,
      onClick,
      required,
      size = 'lg',
      touched,
      type,
      warning,
      ...rest
    },
    ref
  ) => {
    // Return early if no component
    if (!Component) {
      return null
    }

    const baseType = getBaseType(type || Component.displayName)
    const variant = getVariant({ connected, touched, warning, error })
    const hintText = getHintText({ connected, touched, warning, error, hint })
    const isRadio = baseType === 'radio'
    const isCheckbox = baseType === 'checkbox'
    const isCheckable = isRadio || isCheckbox

    const isShowRequired = isRadio ? null : required
    const layout = flexDirection || (isCheckable ? 'row' : 'column')
    const Container = flexDirection === 'row' ? RowContainer : Fragment
    const uniqueId = isRadio ? id : id || name

    const handleClick = e => {
      e.stopPropagation()
      if (isCheckbox) {
        e.target.checked = !e.target.checked
      }
      onClick && onClick(e)
      isCheckable && onChange && onChange(e)
    }

    const Field = (
      <Component
        checked={checked}
        connected
        dataTestId={dataTestId}
        disabled={disabled}
        flexDirection={layout}
        id={uniqueId}
        name={name}
        onChange={onChange}
        onClick={handleClick}
        ref={ref}
        required={required}
        size={size}
        type={baseType}
        variant={variant}
        {...rest}
      >
        {children}
      </Component>
    )

    return (
      <S.Field
        checkableField={isCheckable}
        checked={checked}
        fieldType={Component.type}
        flexDirection={layout}
        size={size}
        {...rest}
      >
        <Container>
          {label && (
            <Label
              checkableField={isCheckable}
              disabled={disabled}
              disabledIcon={disabledIcon}
              htmlFor={isCheckable ? null : uniqueId}
              required={isShowRequired}
              variant={variant}
            >
              {isCheckable && <S.Input>{Field}</S.Input>}
              <S.Content>{label}</S.Content>
            </Label>
          )}
          {!isCheckable && Field}
          {!label && isCheckable && Field}
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

Field.propTypes = {
  checked: bool,
  children: func,
  component: COMPONENT_TYPE.isRequired,
  connected: bool,
  dataTestId: string,
  disabled: bool,
  disabledIcon: node,
  error: string,
  flexDirection: DIRECTIONS_TYPE,
  hint: string,
  id: string,
  label: string,
  name: string.isRequired,
  onChange: func.isRequired,
  onClick: func,
  required: bool,
  size: SIZES_TYPE,
  touched: bool,
  type: INPUTS_TYPE,
  warning: string
}
