import React from 'react'
import { bool, elementType, func, node, number, string } from 'prop-types'

import { StyledCheckbox } from './styles'

export const InputCheckbox = ({
  autoFocus,
  Component = StyledCheckbox,
  checked,
  disabled,
  _ref,
  name,
  onBlur,
  onKeyDown,
  onChange,
  onFocus,
  order,
  type = 'checkbox'
}) => {
  const handleChange = () => {}

  return (
    <Component checked={checked} disabled={disabled} order={order} type={type}>
      <input
        autoFocus={autoFocus}
        checked={checked}
        disabled={disabled}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        onClick={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        ref={_ref}
        type="checkbox"
      />
    </Component>
  )
}

InputCheckbox.type = 'InputCheckbox'

InputCheckbox.propTypes = {
  _ref: node,
  autoFocus: bool,
  checked: bool,
  Component: elementType,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  order: number,
  type: string
}
