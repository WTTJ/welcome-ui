import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Common
import { RowContainer } from '../../common/styles/layout'
import { getHintText, getVariant } from '../../utils/variants'
import { getBaseType } from '../../utils/fields'
// Components
import { Label } from '../Label'
import { Hint } from '../Hint'

// Fields
import { StyledField } from './styles'

export const Field = ({
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
  options,
  placeholder,
  required,
  touched,
  type,
  value,
  warning,
  ...props
}) => {
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
      options={options}
      placeholder={placeholder}
      required={required}
      type={baseType}
      value={value}
      variant={variant}
      {...props}
    >
      {children}
    </Component>
  )

  return (
    <StyledField
      checkableField={isCheckable}
      checked={checked}
      fieldType={Component.type}
      flexDirection={layout}
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
    </StyledField>
  )
}

Field.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  children: PropTypes.func,
  /** Field component e.g. `InputText` or `FileUpload` */
  component: PropTypes.func.isRequired,
  connected: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Custom icon for disabled state */
  disabledIcon: PropTypes.node,
  error: PropTypes.string,
  flexDirection: PropTypes.oneOf(['row', 'column']),
  hint: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  /** For `Select` component */
  options: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  touched: PropTypes.bool,
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'file',
    'password',
    'radio',
    'search',
    'tel',
    'text'
  ]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  warning: PropTypes.string
}
