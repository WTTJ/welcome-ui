import React, { memo, useState } from 'react'
import { bool, elementType, func, string } from 'prop-types'

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
  Component: elementType,
  checked: bool,
  disabled: bool,
  groupName: string,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  type: string
}
