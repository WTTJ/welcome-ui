import React from 'react'
import { bool, number, oneOf } from 'prop-types'

import StyledInputCheckbox from './styles'

export const InputCheckbox = props => {
  const {
    checked = false,
    name,
    onBlur,
    onFocus,
    order = -1,
    size = 'md',
    StyledComponent = StyledInputCheckbox
  } = props

  let input = React.createRef()
  let component = React.createRef()

  const onChange = e => {
    input.current.checked
      ? component.current.classList.add('checked')
      : component.current.classList.remove('checked')
  }

  const onClick = e => {
    input.current.click()
  }

  return (
    <StyledComponent order={order} ref={component} size={size} onClick={onClick}>
      <input
        ref={input}
        defaultChecked={checked}
        id={name}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        type={'checkbox'}
      />
    </StyledComponent>
  )
}

InputCheckbox.propTypes = {
  checked: bool,
  order: number,
  /** Size of component */
  size: oneOf(['sm', 'md', 'lg'])
}
