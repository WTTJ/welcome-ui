import React, { memo, useState } from 'react'
import { bool, number, oneOf } from 'prop-types'

import { StyledInputCheckbox } from './styles'

export const InputCheckbox = memo(props => {
  const {
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
    <StyledComponent checked={checked} order={order} onClick={onChange} size={size} type={type}>
      <input
        defaultChecked={checked}
        id={name}
        name={groupName || name}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        type={type}
      />
    </StyledComponent>
  )
})

InputCheckbox.propTypes = {
  checked: bool,
  order: number,
  /** Size of component */
  size: oneOf(['sm', 'md', 'lg'])
}
