import React, PureComponent from 'react'

import StyledButton from './styles'

class Button extends PureComponent {
  render() {
    return <StyledButton {...this.props} />
  }
}

export default Button
