import React, { PureComponent } from 'react'
import { bool, node, oneOf, oneOfType, string } from 'prop-types'

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
        {disabled && (
          <Disabled>{disabledIcon || <Icon icon="special_pipeline" size="sm" />}</Disabled>
        )}
        {children}
        {required && <Required>*</Required>}
      </StyledLabel>
    )
  }
}

Label.propTypes = {
  children: oneOfType([node, string]),
  /** disabled */
  disabled: bool,
  disabledIcon: node,
  /** required */
  required: bool,
  variant: oneOf(['error', 'warning'])
}

// Specifies the default values for props:
Label.defaultProps = {
  disabled: false,
  required: false
}

export default Label
