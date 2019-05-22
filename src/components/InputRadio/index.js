import React, { memo, useRef } from 'react'
import { bool, func, number, oneOf, string } from 'prop-types'

import { StyledInputCheckbox } from '../InputCheckbox/styles'

export const InputRadio = memo(
  ({ checked, groupName, name, onBlur, onFocus, order = -1, size = 'md' }) => {
    const inputEl = useRef()

    const onClick = () => inputEl.current.click()

    return (
      <StyledInputCheckbox
        checked={checked}
        onClick={onClick}
        order={order}
        size={size}
        type="radio"
      >
        <input
          defaultChecked={checked}
          id={name}
          name={groupName}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={inputEl}
          type="radio"
        />
      </StyledInputCheckbox>
    )
  }
)

InputRadio.propTypes = {
  checked: bool,
  groupName: string,
  name: string,
  onBlur: func,
  onFocus: func,
  order: number,
  size: oneOf(['sm', 'md', 'lg'])
}
