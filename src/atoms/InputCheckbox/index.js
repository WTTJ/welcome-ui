import React, { Component } from 'react'
import { bool, number, oneOf } from 'prop-types'

import StyledInputCheckbox from './styles'

export class InputCheckbox extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.state = { checked: props.checked }
  }

  onChange = e => {
    this.setState({ checked: this.input.current.checked })
  }

  onClick = e => {
    this.input.current.click()
  }

  render() {
    const {
      checked = false,
      name,
      onBlur,
      onFocus,
      order = -1,
      size = 'md',
      StyledComponent = StyledInputCheckbox
    } = this.props

    return (
      <StyledComponent
        checked={this.state.checked}
        order={order}
        size={size}
        onClick={this.onClick}
      >
        <input
          ref={this.input}
          defaultChecked={checked}
          id={name}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={this.onChange}
          type={'checkbox'}
        />
      </StyledComponent>
    )
  }
}

InputCheckbox.propTypes = {
  checked: bool,
  order: number,
  /** Size of component */
  size: oneOf(['sm', 'md', 'lg'])
}
