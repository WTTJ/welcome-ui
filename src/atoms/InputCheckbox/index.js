import React, { PureComponent } from 'react'
import { bool, number, oneOf } from 'prop-types'

import StyledInputCheckbox from './styles'

export class InputCheckbox extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { checked: props.value }
  }

  styledComponent = StyledInputCheckbox

  onClick = e => {
    const { onChange } = this.props
    this.setState({ checked: !this.state.checked })
    onChange && onChange()
  }

  render() {
    const { name, onBlur, onFocus, order, size } = this.props
    const { checked } = this.state
    return (
      <this.styledComponent checked={checked} order={order} onClick={this.onClick} size={size}>
        <input checked={checked} id={name} onBlur={onBlur} onFocus={onFocus} type="checkbox" />
      </this.styledComponent>
    )
  }
}

InputCheckbox.propTypes = {
  checked: bool,
  order: number,
  /** Size of component */
  size: oneOf(['sm', 'md', 'lg'])
}

// Specifies the default values for props:
InputCheckbox.defaultProps = {
  cheked: false,
  order: -1,
  size: 'md'
}

export default InputCheckbox
