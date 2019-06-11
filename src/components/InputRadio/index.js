import React from 'react'
import PropTypes from 'prop-types'

import { StyledCheckbox } from '../InputCheckbox/styles'

export const InputRadio = ({
  checked,
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
  order = -1,
  size = 'md',
  value
}) => (
  <StyledCheckbox checked={checked} disabled={disabled} order={order} size={size} type="radio">
    <input
      checked={checked}
      disabled={disabled}
      id={value}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      type="radio"
      value={value}
    />
  </StyledCheckbox>
)

InputRadio.type = 'InputRadio'

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
