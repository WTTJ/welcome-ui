import React from 'react'
import PropTypes from 'prop-types'

import { StyledCheckbox } from './styles'

export const InputCheckbox = ({
  autoFocus,
  Component = StyledCheckbox,
  checked,
  disabled,
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
        type="checkbox"
      />
    </Component>
  )
}

InputCheckbox.type = 'InputCheckbox'

InputCheckbox.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  Component: PropTypes.elementType,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  order: PropTypes.number,
  type: PropTypes.string
}
