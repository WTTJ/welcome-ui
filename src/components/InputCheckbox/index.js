import React from 'react'
import { bool, elementType, func, number, string } from 'prop-types'

import { StyledCheckbox } from './styles'

export const InputCheckbox = ({
  Component = StyledInputCheckbox,
  checked,
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
  order,
  type = 'checkbox',
  value
}) => (
  <Component checked={checked} disabled={disabled} order={order} type={type}>
    <input
      defaultChecked={checked}
      disabled={disabled}
      id={name}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      type="checkbox"
      value={value}
    />
  </Component>
)

InputCheckbox.propTypes = {
  Component: elementType,
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  order: number,
  type: string,
  value: bool
}
