import React, { PureComponent } from 'react'
import { bool, oneOf } from 'prop-types'

import StyledLabel, { Disabled, Required, Variant } from './styles'

// atoms
import Badge from '../../atoms/Badge'
import { Icon } from '../../atoms/Icon'

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
        {disabled && <Disabled>{disabledIcon || <Icon icon="special_pipeline" size="sm" />}</Disabled>}
        {children}
        {required && <Required>*</Required>}
      </StyledLabel>
    )
  }
}

Label.propTypes = {
  /** disabled */
  disabled: bool,
  /** required */
  required: bool,
  /** variant */
  variant: oneOf(['warning', 'error'])
}

// Specifies the default values for props:
Label.defaultProps = {
  disabled: false,
  required: false,
  variant: ''
}

export default Label
