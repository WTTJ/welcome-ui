import React, { memo, useState } from 'react'
import { bool, func, node, number, oneOf, oneOfType, string } from 'prop-types'

import { StyledInputCheckbox } from './styles'

export const InputCheckbox = memo(props => {
  const {
    disabled,
    groupName,
    name,
    onBlur,
    onFocus,
    order = -1,
    size = 'md',
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
      onClick={!disabled && onChange}
      order={order}
      size={size}
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
  StyledComponent: oneOfType([func, node]),
  checked: bool,
  groupName: string,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  order: number,
  order: number,
  size: string,
  size: oneOf(['sm', 'md', 'lg']),
  /** Size of component */
  type: string
}
