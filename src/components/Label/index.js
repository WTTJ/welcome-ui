import React from 'react'
import { bool, node, oneOf, oneOfType, string } from 'prop-types'

import { Badge } from '../Badge'
import { Icon } from '../Icon'

import { Disabled, Required, StyledLabel, Variant } from './styles'

const getVariantIcon = variant => {
  if (variant === 'error' || variant === 'warning') {
    return (
      errorWarningIcon || (
        <Badge fontsize="xs" size="1.4em" variant={variant}>
          {'!'}
        </Badge>
      )
    )
  }
  return null
}

export const Label = props => {
  const {
    errorWarningIcon,
    children,
    disabled = false,
    disabledIcon,
    required = false,
    variant
  } = props

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
  errorWarningIcon: node,
  /** required */
  required: bool,
  variant: oneOf(['error', 'warning'])
}

// Specifies the default values for props:
Label.defaultProps = {
  disabled: false,
  required: false
}
