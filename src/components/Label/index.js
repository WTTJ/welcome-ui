import React from 'react'
import { bool, node, oneOf, oneOfType, string } from 'prop-types'

import { Badge } from '../Badge'
import { Icon } from '../Icon'

import { Disabled, Required, StyledLabel, Variant } from './styles'

export const Label = ({
  children,
  disabled = false,
  disabledIcon,
  errorWarningIcon,
  htmlFor,
  required = false,
  variant
}) => {
  const getVariantIcon = variant => {
    if (variant === 'error' || variant === 'warning') {
      return (
        errorWarningIcon || (
          <Badge fontsize="xs" size="1.4em" variant={variant}>
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
        <Disabled>{disabledIcon || <Icon icon="special_pipeline" size="sm" />}</Disabled>
      )}
      {children}
      {required && <Required>*</Required>}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: oneOfType([node, string]),
  disabled: bool,
  disabledIcon: node,
  errorWarningIcon: node,
  /** Name of the linked form element */
  htmlFor: string,
  required: bool,
  variant: oneOf(['error', 'warning'])
}
