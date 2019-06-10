import React from 'react'
import PropTypes from 'prop-types'

import { Badge } from '../Badge'
import { Icon } from '../Icon'

import { Disabled, Required, StyledLabel, Variant } from './styles'

export const Label = ({
  children,
  disabled,
  disabledIcon,
  errorWarningIcon,
  htmlFor,
  required,
  variant
}) => {
  const getVariantIcon = variant => {
    if (variant === 'error' || variant === 'warning') {
      return (
        errorWarningIcon || (
          <Badge rounded variant={variant}>
            !
          </Badge>
        )
      )
    }
    return null
  }

  return (
    <StyledLabel
      disabled={disabled}
      disabledIcon={disabledIcon}
      errorWarningIcon={errorWarningIcon}
      htmlFor={htmlFor}
      required={required}
      variant={variant}
    >
      {variant && <Variant variant={variant}>{getVariantIcon(variant)}</Variant>}
      {disabled && (
        <Disabled>{disabledIcon || <Icon name="special_pipeline" size="sm" />}</Disabled>
      )}
      {children}
      {required && <Required>*</Required>}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  disabledIcon: PropTypes.node,
  errorWarningIcon: PropTypes.node,
  /** Name of the linked form element */
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(['error', 'warning'])
}
