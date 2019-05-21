import React, { memo, useState } from 'react'
import { bool, elementType, func, number, oneOf, oneOfType, string } from 'prop-types'

import { StyledInputCheckbox } from './styles'

export const InputCheckbox = memo(props => {
  const {
    disabled,
    groupName,
    name,
    onBlur,
    onFocus,
    order = -1,
    StyledComponent = StyledInputCheckbox,
    type = 'checkbox'
  } = props

  const [checked, setChecked] = useState(props.checked)

  const onChange = e => {
    if (props.onChange) return props.onChange()
    setChecked(!checked)
  }

  return (
    <StyledComponent
      checked={checked}
      disabled={disabled}
      onClick={disabled ? undefined : onChange}
      order={order}
      type={type}
    >
      <input
        defaultChecked={checked}
        disabled={disabled}
        id={name}
        name={groupName || name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
      />
    </StyledComponent>
  )
})

InputCheckbox.propTypes = {
  StyledComponent: elementType,
  checked: bool,
  disabled: bool,
  groupName: string,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  order: number,
  order: number,
  /** Size of component */
  type: string
}
