import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledInputCheckbox } from './styles'

export const InputCheckbox = memo(
  ({
    checked: initialChecked,
    disabled,
    groupName,
    name,
    onBlur,
    onChange,
    onFocus,
    Component = StyledInputCheckbox,
    type = 'checkbox',
    ...props
  }) => {
    const [checked, setChecked] = useState(initialChecked)

    const handleChange = () => {
      onChange && onChange()
      setChecked(!checked)
    }

    return (
      <Component
        checked={checked}
        disabled={disabled}
        onClick={disabled ? undefined : handleChange}
        type={type}
        {...props}
      >
        <input
          defaultChecked={checked}
          disabled={disabled}
          id={name}
          name={groupName || name}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          type={type}
        />
      </Component>
    )
  }
)

InputCheckbox.propTypes = {
  Component: PropTypes.elementType,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  groupName: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string
}
