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
  /** To set the button color */
  mode: string,
  /** To set the button size */
  size: oneOf(['auto', 'sm', 'md', 'lg']),
  /** To set the button width */
  width: oneOf(['full', 'half']),
  /** To set a rounded button */
  rounded: bool,
  /** A button with a pulsing effect, only for rounded ones */
  pulsing: bool,
  /** A button with rounded borders */
  borderRounded: bool,
  /** A button with icon */
  withicon: bool
}

// Specifies the default values for props:
Button.defaultProps = {
  size: 'auto',
  mode: 'primary',
  width: 'auto',
  rounded: false,
  pulsing: false,
  borderRounded: false,
  withicon: false
};

export default Button
