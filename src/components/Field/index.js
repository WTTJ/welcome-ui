import React, { Fragment } from 'react'
import { bool, func, node, object, oneOf, string } from 'prop-types'
import includes from 'lodash.includes'

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

import { StyledField } from './styles'

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
  const isCheckable = () => {
    return includes(['toggle', 'checkbox', 'radio'], fieldType)
  }

  const showRequired = () => {
    return includes(['radio', 'radioTab'], fieldType) ? null : required
  }

  const FieldType = getFieldType(fieldType)
  const variant = getVariant(warning, error)
  const hintText = error || warning || hint
  const layout = direction || isCheckable() ? 'row' : 'column'
  const Container = layout === 'row' ? RowContainer : Fragment

  return (
    <StyledField
      checkableField={isCheckable()}
      checked={checked}
      direction={layout}
      fieldType={fieldType}
    >
      <Container>
        {label && (
          <Label
            disabled={disabled}
            disabledIcon={disabledIcon}
            htmlFor={name}
            required={showRequired()}
            variant={variant}
          >
            {label}
          </Label>
        )}
        <FieldType
          checked={checked}
          disabled={disabled}
          groupName={groupName}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          required={required}
          variant={variant}
        />
      </Container>
      {hintText && <Hint variant={variant}>{hintText}</Hint>}
    </StyledField>
  )
}

Field.propTypes = {
  checked: bool,
  direction: string,
  disabled: bool,
  /** Direction of Label and FieldType Wrapper */
  disabledIcon: node,
  /** Label of Field component */
  error: string,
  /** Hint of Field component */
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
  /** Error of Field component */
  fieldTypeProps: object,
  /** Warning of Field component */
  groupName: string,
  /** custom icon for error / warning state */
  hint: string,
  /** name of the field */
  label: string,
  /** onFocus callback */
  name: string.isRequired,
  /** onBlur callback */
  onBlur: func,
  /** onChange callback */
  onChange: func,
  /** Required Field component */
  onFocus: func,
  /** Disabled Field component */
  placeholder: string,
  /** custom icon for disabled state */
  required: bool,
  /** Placeholder of Field's component input */
  warning: string
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
