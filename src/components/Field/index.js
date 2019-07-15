import React, { forwardRef, Fragment } from 'react'
import { bool, func, node, number, object, oneOf, oneOfType, string } from 'prop-types'

// Common
import { RowContainer } from '../../common/styles/layout'
import { getBaseType, getHintText, getVariant } from '../../utils/'
import { COMPONENT_TYPE, DIRECTIONS_TYPE, SIZES_TYPE } from '../../utils'
// Components
import { Label } from '../Label'
import { Hint } from '../Hint'

// Fields
import * as S from './styles'

export const Field = forwardRef(
  (
    {
      autoFocus,
      checked,
      children,
      component: Component,
      connected,
      disabled,
      disabledIcon,
      error,
      flexDirection,
      hint,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder,
      required,
      size = 'lg',
      touched,
      type,
      value,
      warning,
      ...rest
    },
    ref
  ) => {
    // Return early if no component
    if (!Component) {
      return null
    }

    const baseType = getBaseType(Component.type || type)
    const variant = getVariant({ connected, touched, warning, error })
    const hintText = getHintText({ connected, touched, warning, error, hint })
    const isRadio = baseType === 'radio'
    const isCheckable = ['checkbox', 'radio'].includes(baseType)

    const isShowRequired = isRadio ? null : required
    const layout = flexDirection || (isCheckable ? 'row' : 'column')
    const Container = layout === 'row' ? RowContainer : Fragment
    const htmlFor = isRadio ? value : name

    const field = (
      <Component
        autoFocus={autoFocus}
        checked={checked}
        disabled={disabled}
        flexDirection={layout}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref}
        required={required}
        size={size}
        type={baseType}
        value={value}
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
      >
        <Container>
          {label && (
            <Label
              disabled={disabled}
              disabledIcon={disabledIcon}
              htmlFor={htmlFor}
              required={isShowRequired}
              variant={variant}
            >
              {isCheckable && field}
              {label}
            </Label>
          )}
          {!isCheckable && field}
        </Container>
        {hintText && <Hint variant={variant}>{hintText}</Hint>}
      </S.Field>
    )
  }
)

Field.displayName = 'Field'

Field.propTypes = {
  autoFocus: bool,
  checked: bool,
  children: func,
  /** Field component e.g. `InputText` or `FileUpload` or `'div'` */
  component: COMPONENT_TYPE.isRequired,
  connected: bool,
  disabled: bool,
  /** Custom icon for disabled state */
  disabledIcon: node,
  error: string,
  flexDirection: DIRECTIONS_TYPE,
  hint: string,
  label: string,
  name: string.isRequired,
  onBlur: func,
  onChange: func.isRequired,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  required: bool,
  size: SIZES_TYPE,
  touched: bool,
  type: oneOf(['checkbox', 'email', 'file', 'password', 'radio', 'search', 'tel', 'text']),
  value: oneOfType([number, object, string]),
  warning: string
}
