import React, { Fragment } from 'react'
import { bool, func, node, oneOf, oneOfType, string } from 'prop-types'
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
// import { MarkdownEditor } from '../MarkdownEditor'
import { RadioTab } from '../RadioTab'
import { Toggle } from '../Toggle'
import { Hint } from '../Hint'

// Fields
import { StyledField } from './styles'

const getIsCheckbox = type => includes(['toggle', 'checkbox'], type)
const getIsRadio = type => includes(['radio', 'radioTab'], type)
const getIsCheckable = type => includes(['toggle', 'checkbox', 'radio', 'radioTab'], type)

const getFieldType = type => {
  const fieldTypes = {
    checkbox: InputCheckbox,
    email: InputText,
    fileupload: FileUpload,
    number: InputText,
    // mde: MarkdownEditor,
    radio: InputRadio,
    radioTab: RadioTab,
    text: InputText,
    textarea: InputTextarea,
    toggle: Toggle
  }

  return fieldTypes[type] || fieldTypes.text
}

export const Field = ({
  disabled = false,
  error,
  checked,
  children,
  disabledIcon,
  fieldType = type,
  flexDirection,
  hint,
  label,
  onChange,
  onBlur,
  onFocus,
  name,
  placeholder,
  required = false,
  type,
  value,
  warning
}) => {
  const handleChange = e => {
    const {
      target: { name, value, checked }
    } = e
    e.preventDefault()
    const newValue = getIsCheckbox(type) ? checked : value
    onChange && onChange(newValue, name)
  }

  const handleBlur = () => {
    onBlur && onBlur()
  }

  const handleFocus = () => {
    onFocus && onFocus()
  }

  // const type = fieldType || type
  const Component = getFieldType(fieldType || type)
  const variant = getVariant(warning, error)
  const isRadio = getIsRadio(type)
  const isCheckable = getIsCheckable(type)

  const hintText = error || warning || hint
  const isShowRequired = isRadio ? null : required
  const layout = flexDirection || isCheckable ? 'row' : 'column'
  const Container = layout === 'row' ? RowContainer : Fragment
  const htmlFor = isRadio ? value : name // Use value for radio buttons

  const field = (
    <Component
      checked={checked}
      disabled={disabled}
      fieldType={fieldType || type}
      flexDirection={layout}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
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
      fieldType={fieldType || type}
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
  checked: bool,
  children: func,
  disabled: bool,
  /** Custom icon for disabled state */
  disabledIcon: node,
  error: string,
  /** Required Field component */
  fieldType: string,
  flexDirection: oneOf(['row', 'container']),
  hint: string,
  label: string,
  name: string.isRequired,
  onBlur: func,
  onChange: func.isRequired,
  onFocus: func,
  placeholder: string,
  required: bool,
  type: oneOf([
    'checkbox',
    'email',
    'fileupload',
    'mde',
    'number',
    'radio',
    'radioTab',
    'text',
    'textarea',
    'toggle'
  ]).isRequired,
  value: oneOfType([string, bool]),
  warning: string
}
