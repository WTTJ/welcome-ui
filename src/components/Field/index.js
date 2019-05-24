import React, { Fragment } from 'react'
import { bool, func, node, object, oneOf, string } from 'prop-types'
import includes from 'lodash.includes'

// Common
import { RowContainer } from '../../common/styles/layout'
import { getVariant } from '../../utils/variants'
// Components
import { FileUpload } from '../FileUpload'
import { InputText } from '../InputText'
import { InputTextarea } from '../InputTextarea'
import { InputCheckbox } from '../InputCheckbox'
import { InputRadio } from '../InputRadio'
import { Label } from '../Label'
import { MarkdownEditor } from '../MarkdownEditor'
import { RadioTab } from '../RadioTab'
import { Toggle } from '../Toggle'
import { Hint } from '../Hint'

// Fields
import { StyledField } from './styles'

const getFieldType = fieldType => {
  const fieldTypes = {
    checkbox: InputCheckbox,
    email: InputText,
    fileupload: FileUpload,
    number: InputText,
    mde: MarkdownEditor,
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
  error,
  checked,
  children,
  disabledIcon,
  groupName,
  name,
  onBlur,
  onChange,
  onFocus,
  fieldType = 'text',
  fieldProps = {},
  hint,
  label,
  placeholder,
  required = false,
  warning,
  ...props
}) => {
  const { flexDirection, ...rest } = { ...props }
  const isCheckable = () => {
    return includes(['toggle', 'checkbox', 'radio'], fieldType)
  }

  const showRequired = () => {
    return includes(['radio', 'radioTab'], fieldType) ? null : required
  }

  const FieldType = getFieldType(fieldType)
  const variant = getVariant(warning, error)
  const hintText = error || warning || hint
  const layout = flexDirection || isCheckable() ? 'row' : 'column'
  const Container = layout === 'row' ? RowContainer : Fragment

  return (
    <StyledField
      checkableField={isCheckable()}
      checked={checked}
      fieldType={fieldType}
      flexDirection={layout}
      {...rest}
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
        >
          {children}
        </FieldType>
      </Container>
      {hintText && <Hint variant={variant}>{hintText}</Hint>}
    </StyledField>
  )
}

Field.propTypes = {
  checked: bool,
  children: func,
  disabled: bool,
  /** Custom icon for disabled state */
  disabledIcon: node,
  error: string,
  fieldProps: object,
  /** Field component */
  fieldType: oneOf([
    'mde',
    'text',
    'number',
    'email',
    'fileupload',
    'textarea',
    'radio',
    'radioTab',
    'toggle',
    'radio',
    'radioTab',
    'checkbox'
  ]).isRequired,
  groupName: string,
  hint: string,
  label: string,
  name: string.isRequired,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeholder: string,
  required: bool,
  warning: string
}
