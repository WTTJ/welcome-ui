import React from 'react'
import { bool, func, node, number, oneOf, string } from 'prop-types'

import { StyledCheckbox } from '../InputCheckbox/styles'

export const InputRadio = ({
  autoFocus,
  checked,
  disabled,
  inputRef,
  name,
  onBlur,
  onChange,
  onKeyDown,
  onFocus,
  order = -1,
  size = 'md',
  value
}) => (
  <StyledCheckbox checked={checked} disabled={disabled} order={order} size={size} type="radio">
    <input
      autoFocus={autoFocus}
      checked={checked}
      disabled={disabled}
      id={value}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      ref={inputRef}
      type="radio"
      value={value}
    />
  </StyledCheckbox>
)

InputRadio.type = 'InputRadio'

InputRadio.propTypes = {
  autoFocus: bool,
  checked: bool,
  disabled: bool,
  inputRef: node,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  order: number,
  size: oneOf(['sm', 'md', 'lg']),
  value: string
}
