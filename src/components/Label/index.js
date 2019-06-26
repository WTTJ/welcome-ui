import React, { forwardRef } from 'react'
import { bool, node, oneOf, oneOfType, string } from 'prop-types'

import { Badge } from '../Badge'
import { Icon } from '../Icon'

import * as S from './styles'

const getVariantIcon = (variant, errorWarningIcon) => {
  if (variant === 'error' || variant === 'warning') {
    return (
      errorWarningIcon || (
        <Badge shape="circle" variant={variant}>
          !
        </Badge>
      )
    )
  }
  return null
}

export const Label = forwardRef(
  ({ as, children, disabled, disabledIcon, errorWarningIcon, htmlFor, required, variant }, ref) => {
    const icon = variant && getVariantIcon(variant, errorWarningIcon)
    return (
      <S.Label
        as={as}
        disabled={disabled}
        disabledIcon={disabledIcon}
        errorWarningIcon={errorWarningIcon}
        htmlFor={htmlFor}
        ref={ref}
        required={required}
        variant={variant}
      >
        {variant && <S.Variant variant={variant}>{icon}</S.Variant>}
        {disabled && (
          <S.Disabled>{disabledIcon || <Icon name="special_pipeline" size="sm" />}</S.Disabled>
        )}
        {children}
        {required && <S.Required>*</S.Required>}
      </S.Label>
    )
  }
)

Label.displayName = 'Label'

Label.propTypes = {
  as: oneOfType([node, string]),
  children: oneOfType([node, string]),
  disabled: bool,
  disabledIcon: node,
  errorWarningIcon: node,
  /** Name of the linked form element */
  htmlFor: string,
  required: bool,
  variant: oneOf(['error', 'warning'])
}
