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
import { RadioTab } from '../RadioTab'
import { Select } from '../Select'
import { Toggle } from '../Toggle'
import { Hint } from '../Hint'

// Fields
import { StyledField } from './styles'

const getIsRadio = type => includes(['radio', 'radioTab'], type)
const getIsCheckable = type => includes(['toggle', 'checkbox', 'radio', 'radioTab'], type)

const FIELD_TYPES = {
  checkbox: InputCheckbox,
  email: InputText,
  fileupload: FileUpload,
  number: InputText,
  radio: InputRadio,
  radioTab: RadioTab,
  select: Select,
  text: InputText,
  textarea: InputTextarea,
  toggle: Toggle
}

const getFieldType = type => FIELD_TYPES[type] || FIELD_TYPES.text

export const Field = ({
  disabled,
  error,
  checked,
  children,
  disabledIcon,
  fieldType,
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
  const Component = getFieldType(fieldType || type)
  const variant = getVariant({ touched, warning, error })
  const isRadio = getIsRadio(type)
  const isCheckable = getIsCheckable(type)

  const hintText = (touched && (error || warning)) || hint
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
  checked: PropTypes.bool,
  children: PropTypes.func,
  disabled: PropTypes.bool,
  /** Custom icon for disabled state */
  disabledIcon: PropTypes.node,
  error: PropTypes.string,
  /** Field component */
  fieldType: PropTypes.oneOf(Object.keys(FIELD_TYPES)).isRequired,
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
  type: PropTypes.oneOf(Object.keys(FIELD_TYPES)).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  warning: PropTypes.string
}
