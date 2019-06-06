import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import includes from 'lodash.includes'

// Common
import { RowContainer } from '../../common/styles/layout'
import { getVariant } from '../../utils/variants'
// Components
import { Label } from '../Label'
import { Hint } from '../Hint'

// Fields
import { StyledField } from './styles'

const getIsRadio = type => includes(['InputRadio', 'RadioTab'], type)
const getIsCheckable = type => includes(['Toggle', 'InputCheckbox', 'InputRadio', 'RadioTab'], type)

export const Field = ({
  disabled,
  error,
  checked,
  children,
  component,
  disabledIcon,
  flexDirection,
  hint,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  required,
  touched,
  type,
  value,
  warning
}) => {
  const Component = component
  const variant = getVariant({ touched, warning, error })
  const isRadio = getIsRadio(component.name)
  const isCheckable = getIsCheckable(component.name)

  const hintText = (touched && (error || warning)) || hint
  const isShowRequired = isRadio ? null : required
  const layout = flexDirection || isCheckable ? 'row' : 'column'
  const Container = layout === 'row' ? RowContainer : Fragment
  const htmlFor = isRadio ? value : name

  const field = (
    <Component
      checked={checked}
      disabled={disabled}
      flexDirection={layout}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      options={options}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      variant={variant}
    >
      {children}
    </Component>
  )

  return (
    <StyledField
      checkableField={isCheckable}
      checked={checked}
      fieldType={component.name}
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
  checked: PropTypes.bool,
  children: PropTypes.func,
  /** Field component */
  component: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  /** Custom icon for disabled state */
  disabledIcon: PropTypes.node,
  error: PropTypes.string,
  flexDirection: PropTypes.oneOf(['row', 'container']),
  hint: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  /** For `select` fields */
  options: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  touched: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'tel', 'email', 'password', 'file']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  warning: PropTypes.string
}
