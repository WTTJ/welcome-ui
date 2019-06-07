import React from 'react'
import PropTypes from 'prop-types'

import { StyledCheckbox } from './styles'

export const InputCheckbox = ({
  Component = StyledCheckbox,
  checked,
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
  order,
  type = 'checkbox'
}) => {
  const handleChange = () => {}

  return (
    <Component checked={checked} disabled={disabled} order={order} type={type}>
      <input
        checked={checked}
        disabled={disabled}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        onClick={onChange}
        onFocus={onFocus}
        type="checkbox"
      />
    </Component>
  )
}

InputCheckbox.propTypes = {
  Component: PropTypes.elementType,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  order: PropTypes.number,
  type: PropTypes.string
}
