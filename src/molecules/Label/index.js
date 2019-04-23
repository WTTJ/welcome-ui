import React, { PureComponent } from 'react'
import { bool } from 'prop-types'

import StyledLabel, { Disabled, Required, Variant } from './styles'

// atoms
import Badge from '../../atoms/Badge'

export class Label extends PureComponent {
  getVariantIcon = variant => {
    const { errorWarningIcon } = this.props
    if (variant === 'error' || variant === 'warning') {
      return (
        errorWarningIcon || (
          <Badge size="1.4em" fontsize="xs" variant={variant}>
            !
          </Badge>
        )
      )
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
