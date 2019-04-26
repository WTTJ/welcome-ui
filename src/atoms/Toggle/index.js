import React, { PureComponent } from 'react'
import { bool, number, oneOf } from 'prop-types'

import StyledToggle from './styles'

export class Toggle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { checked: props.value }
  }

  onClick = e => {
    const { onChange } = this.props
    this.setState({ checked: !this.state.checked })
    onChange && onChange()
  }

  render() {
    const { name, onBlur, onFocus, order, size } = this.props
    const { checked } = this.state
    return (
      <StyledToggle checked={checked} order={order} onClick={this.onClick} size={size}>
        <input checked={checked} id={name} onBlur={onBlur} onFocus={onFocus} type="checkbox" />
      </StyledToggle>
    )
  }
}

Toggle.propTypes = {
  checked: bool,
  order: number,
  /** Size of component */
  size: oneOf(['sm', 'md', 'lg'])
}

// Specifies the default values for props:
Toggle.defaultProps = {
  cheked: false,
  order: -1,
  size: 'md'
}

export default Toggle
