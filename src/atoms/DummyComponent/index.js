import React, { PureComponent } from 'react'
import { oneOf, string } from 'prop-types'

import StyledDummyComponent from './styles'

export class DummyComponent extends PureComponent {
  render() {
    return <StyledDummyComponent {...this.props}>{this.props.children}</StyledDummyComponent>
  }
}

DummyComponent.propTypes = {
  /** Size of component */
  size: oneOf(['auto', 'sm', 'md', 'lg']),
  /** Type of component */
  type: string
}

// Specifies the default values for props:
DummyComponent.defaultProps = {
  size: 'auto',
  type: 'full'
}

export default DummyComponent
