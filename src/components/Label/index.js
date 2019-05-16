import React from 'react'
import { bool, node, oneOf, oneOfType, string } from 'prop-types'

import { Disabled, Required, StyledLabel, Variant } from './styles'

import { Badge } from '../Badge'
import { Icon } from '../Icon'

export const Label = props => {
  const { children, disabled = false, disabledIcon, required = false, variant } = props

  const getVariantIcon = variant => {
    const { errorWarningIcon } = props
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

  return (
    <StyledLabel {...props}>
      {variant && <Variant variant={variant}>{getVariantIcon(variant)}</Variant>}
      {disabled && (
        <Disabled>{disabledIcon || <Icon icon="special_pipeline" size="sm" />}</Disabled>
      )}
      {children}
      {required && <Required>*</Required>}
    </StyledLabel>
  )
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
