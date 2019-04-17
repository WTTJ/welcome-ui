import React, { PureComponent } from 'react'
import { bool } from 'prop-types'

import StyledLabel, { Disabled, Required, Variant } from './styles'

export class Label extends PureComponent {
  getVariantIcon = variant => {
    const { errorWarningIcon } = this.props
    if (variant === 'error' || variant === 'warning') {
      return errorWarningIcon || '⚠'
    }
  }

  render() {
    const { children, disabled, disabledIcon, required, variant } = this.props
    return (
      <StyledLabel {...this.props}>
        {variant && <Variant variant={variant}>{this.getVariantIcon(variant)}</Variant>}
        {disabled && <Disabled>{disabledIcon || <div></div>}</Disabled>}
        {children}
        {required && <Required>*</Required>}
      </StyledLabel>
    )
  }
}

Label.propTypes = {
  /** locked */
  locked: bool,
  /** required */
  required: bool
}

// Specifies the default values for props:
Label.defaultProps = {
  locked: false,
  required: false
}

export default Label
