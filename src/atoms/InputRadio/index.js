import React, { memo, useRef } from 'react'
import { bool, number, oneOf } from 'prop-types'

import StyledInputCheckbox from '../InputCheckbox/styles'

export const InputRadio = memo(props => {
  const { checked, groupName, name, onBlur, onFocus, order = -1, size = 'md' } = props

  const inputEl = useRef()

  const onClick = e => inputEl.current.click()

  return (
    <StyledInputCheckbox onClick={onClick} checked={checked} order={order} size={size} type="radio">
      <input
        defaultChecked={props.checked}
        checked={checked}
        id={name}
        name={groupName}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={inputEl}
        type="radio"
      />
    </StyledInputCheckbox>
  )
})

InputRadio.propTypes = {
  checked: bool,
  order: number,
  /** Size of component */
  size: oneOf(['sm', 'md', 'lg'])
}
