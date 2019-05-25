import React from 'react'
import { bool, func, number, oneOf, string } from 'prop-types'

import { StyledRadio } from '../InputCheckbox/styles'

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
  <StyledRadio checked={checked} disabled={disabled} order={order} size={size} type="radio">
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
  </StyledRadio>
)

InputRadio.propTypes = {
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  order: number,
  size: oneOf(['sm', 'md', 'lg']),
  value: string
}
