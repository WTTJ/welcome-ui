import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
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
  disabled,
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
  hint,
  label,
  placeholder,
  required,
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
  checked: PropTypes.bool,
  children: PropTypes.func,
  disabled: PropTypes.bool,
  /** Custom icon for disabled state */
  disabledIcon: PropTypes.node,
  error: PropTypes.string,
  fieldProps: PropTypes.object,
  /** Field component */
  fieldType: PropTypes.oneOf([
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
  groupName: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  warning: PropTypes.string
}
