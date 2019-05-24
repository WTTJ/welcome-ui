import React from 'react'
import PropTypes from 'prop-types'

import { StyledInputCheckbox } from '../InputCheckbox/styles'

export const InputRadio = ({
  checked,
  disabled = 'false',
  name,
  onBlur,
  onChange,
  onFocus,
  order = -1,
  size = 'md',
  value
}) => (
  <StyledInputCheckbox checked={checked} disabled={disabled} order={order} size={size} type="radio">
    <input
      defaultChecked={checked}
      disabled={disabled}
      id={value}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      type="radio"
      value={value}
    />
  </StyledInputCheckbox>
)

InputRadio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  order: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.string
}
