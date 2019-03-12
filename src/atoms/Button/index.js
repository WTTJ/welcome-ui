import React, { PureComponent } from 'react'
import { bool, oneOf, string} from 'prop-types'
import StyledButton from './styles'

export class Button extends PureComponent {
  render() {
    return <StyledButton {...this.props} />
  }
}

Button.propTypes = {
  /** Just for `LinkButton` and `InlineLink` */
  to: string,
  /** Just for `HrefButton` */
  href: string,
  /** Normally one of `primary`, `dark`, `light`, `neutral`, `danger` or `linkedin`: */
  mode: string,
  size: oneOf(['auto', 'sm', 'md', 'lg']),
  width: oneOf(['full', 'half']),
  rounded: bool,
  pulsing: bool,
  borderRounded: bool,
  withicon: bool
}

export default Button
