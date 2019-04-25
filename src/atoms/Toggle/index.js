import React, { PureComponent } from 'react'
import { oneOf } from 'prop-types'

import StyledToggle from './styles'

export class Toggle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { checked: props.value }
  }

  onClick = e => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const { size } = this.props
    const { checked } = this.state
    return (
      <StyledToggle size={size} onClick={this.onClick} value={checked}>
        <input type="checkbox" value={checked} />
      </StyledToggle>
    )
  }
}

Toggle.propTypes = {
  /** Size of component */
  size: oneOf(['sm', 'md', 'lg'])
}

// Specifies the default values for props:
Toggle.defaultProps = {
  size: 'md'
}

export default Toggle
