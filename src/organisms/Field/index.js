import React, { PureComponent } from 'react'
import { bool, func, object, oneOf, node, string } from 'prop-types'

import StyledField from './styles'

// atoms
import InputRadios from '../../molecules/InputRadios'
import Label from '../../molecules/Label'
import InputText from '../../atoms/InputText'
import Hint from '../../atoms/Hint'

export class Field extends PureComponent {
  getFieldType = fieldType => {
    const fieldTypes = {
      text: InputText,
      number: InputText,
      email: InputText,
      radios: InputRadios
    }
    return fieldTypes[fieldType] || fieldTypes.text
  }

  getVariant = (warning, error) => {
    if (error) return 'error'
    if (warning) return 'warning'
    return 'hint'
  }

  render() {
    const {
      label,
      fieldType,
      fieldTypeProps,
      hint,
      error,
      warning,
      onFocus,
      onBlur,
      onChange,
      required,
      disabled,
      placeholder
    } = this.props
    const FieldType = this.getFieldType(fieldType)
    let variant = this.getVariant(warning, error)
    let hintText = error || warning || hint

    return (
      <StyledField>
        {label && (
          <Label variant={variant} {...this.props}>
            {label}
          </Label>
        )}
        <FieldType
          {...fieldTypeProps}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          variant={variant}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
        />
        {hintText && <Hint variant={variant}>{hintText}</Hint>}
      </StyledField>
    )
  }
}

Field.propTypes = {
  /** Label of Field component */
  label: string,
  /** Type of Field component */
  fieldType: oneOf(['text', 'number', 'email', 'textarea', 'radios']),
  /** Props of Field's component input */
  fieldTypeProps: object,
  /** Hint of Field component */
  hint: string,
  /** Error of Field component */
  error: string,
  /** Warning of Field component */
  warning: string,
  /** custom icon for error / warning state */
  errorWarningIcon: node,
  /** onFocus callback */
  onFocus: func,
  /** onBlur callback */
  onBlur: func,
  /** onChange callback */
  onChange: func,
  /** Required Field component */
  required: bool,
  /** Disabled Field component */
  disabled: bool,
  /** custom icon for disabled state */
  disabledIcon: node,
  /** Placeholder of Field's component input */
  placeholder: string
}

// Specifies the default values for props:
Field.defaultProps = {
  label: '',
  fieldType: 'text',
  fieldTypeProps: {},
  hint: '',
  error: '',
  warning: '',
  required: false,
  disabled: false,
  placeholder: ''
}

export default Field
