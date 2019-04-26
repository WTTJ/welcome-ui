import React, { PureComponent, Fragment } from 'react'
import { bool, func, object, oneOf, node, string } from 'prop-types'

import StyledField from './styles'

// common
import { RowContainer } from '../../common/styles/layout'

// atoms
import InputRadios from '../../molecules/InputRadios'
import Label from '../../molecules/Label'
import InputText from '../../atoms/InputText'
import Toggle from '../../atoms/Toggle'
import Hint from '../../atoms/Hint'

export class Field extends PureComponent {
  getFieldType = fieldType => {
    const fieldTypes = {
      text: InputText,
      number: InputText,
      email: InputText,
      radios: InputRadios,
      toggle: Toggle
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
      checked,
      direction,
      disabled,
      disabledIcon,
      error,
      fieldType,
      fieldTypeProps,
      hint,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      warning
    } = this.props
    const FieldType = this.getFieldType(fieldType)
    const variant = this.getVariant(warning, error)
    const hintText = error || warning || hint
    const layout = direction || fieldType === 'toggle' ? 'row' : 'column'
    const Container = layout === 'row' ? RowContainer : Fragment
    return (
      <StyledField direction={layout}>
        <Container>
          {label && (
            <Label
              htmlFor={name}
              disabled={disabled}
              disabledIcon={disabledIcon}
              required={required}
              variant={variant}
            >
              {label}
            </Label>
          )}
          <FieldType
            {...fieldTypeProps}
            checked={checked}
            name={name}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            variant={variant}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
          />
        </Container>
        {hintText && <Hint variant={variant}>{hintText}</Hint>}
      </StyledField>
    )
  }
}

Field.propTypes = {
  /** Direction of Label and FieldType Wrapper */
  direction: string,
  /** Label of Field component */
  label: string,
  /** Type of Field component */
  fieldType: oneOf(['text', 'number', 'email', 'textarea', 'radios', 'toggle']),
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
  /** name of the field */
  name: string.isRequired,
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
  disabled: false,
  error: '',
  fieldType: 'text',
  fieldTypeProps: {},
  hint: '',
  label: '',
  placeholder: '',
  required: false,
  warning: ''
}

export default Field
