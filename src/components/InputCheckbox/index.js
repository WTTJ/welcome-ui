import React, { memo, useState } from 'react'
import { bool, elementType, func, number, oneOf, oneOfType, string } from 'prop-types'

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
    order = -1,
    Component = StyledInputCheckbox,
    type = 'checkbox'
  }) => {
    const [checked, setChecked] = useState(initialChecked)

    const handleChange = e => {
      onChange && onChange()
      setChecked(!checked)
    }

    return (
      <Component
        checked={checked}
        disabled={disabled}
        onClick={disabled ? undefined : handleChange}
        order={order}
        type={type}
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
  order: number,
  type: string
}
