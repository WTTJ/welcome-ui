import React, { Fragment } from 'react'
import { bool, func, oneOf, node, string } from 'prop-types'
import includes from 'lodash.includes'

import { StyledField } from './styles'

// common
import { RowContainer } from '../../common/styles/layout'
import { getVariant } from '../../utils/variants'

import { Label } from '../Label'
import { InputText } from '../InputText'
import { InputTextarea } from '../InputTextarea'
import { InputCheckbox } from '../InputCheckbox'
import { InputRadio } from '../InputRadio'
import { RadioTab } from '../RadioTab'
import { Toggle } from '../Toggle'
import { Hint } from '../Hint'

const getFieldType = fieldType => {
  const fieldTypes = {
    checkbox: InputCheckbox,
    email: InputText,
    number: InputText,
    radio: InputRadio,
    radioTab: RadioTab,
    text: InputText,
    textarea: InputTextarea,
    toggle: Toggle
  }

  return fieldTypes[fieldType] || fieldTypes.text
}

export const Field = ({
  disabled = false,
  error = '',
  checked,
  direction,
  disabledIcon,
  groupName,
  name,
  onBlur,
  onChange,
  onFocus,
  fieldType = 'text',
  fieldTypeProps = {},
  hint,
  label = '',
  placeholder = '',
  required = false,
  warning = ''
}) => {
  const isInline = () => {
    return includes(['toggle', 'checkbox', 'radio'], fieldType)
  }

  const showRequired = () => {
    return includes(['radio', 'radioTab'], fieldType) ? null : required
  }

  const FieldType = getFieldType(fieldType)
  const variant = getVariant(warning, error)
  const hintText = error || warning || hint
  const layout = direction || isInline() ? 'row' : 'column'
  const Container = layout === 'row' ? RowContainer : Fragment

  return (
    <StyledField direction={layout} fieldType={fieldType} checked={checked}>
      <Container>
        {label && (
          <Label
            htmlFor={name}
            disabled={disabled}
            disabledIcon={disabledIcon}
            required={showRequired()}
            variant={variant}
          >
            {label}
          </Label>
        )}
        <FieldType
          checked={checked}
          name={name}
          groupName={groupName}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
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

Field.propTypes = {
  /** Direction of Label and FieldType Wrapper */
  direction: string,
  /** Label of Field component */
  label: string,
  /** Type of Field component */
  fieldType: oneOf([
    'text',
    'number',
    'email',
    'textarea',
    'radio',
    'radioTab',
    'toggle',
    'radio',
    'radioTab',
    'checkbox'
  ]),
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
  label: '',
  placeholder: '',
  required: false,
  warning: ''
}
