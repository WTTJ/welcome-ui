import React, { PureComponent } from 'react'
import { oneOf } from 'prop-types'

import StyledHint from './styles'

export class Hint extends PureComponent {
  render() {
    return <StyledHint {...this.props}>{this.props.children}</StyledHint>
  }
}

Hint.propTypes = {
  /** Variant of component */
  variant: oneOf(['hint', 'warning', 'error'])
}

// Specifies the default values for props:
Hint.defaultProps = {
  variant: 'hint'
}

export default Hint
