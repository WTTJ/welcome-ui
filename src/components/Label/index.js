import React from 'react'
import PropTypes from 'prop-types'

import { Badge } from '../Badge'
import { Icon } from '../Icon'

import * as S from './styles'

export const Label = ({
  as,
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
    <S.Label
      as={as}
      disabled={disabled}
      disabledIcon={disabledIcon}
      errorWarningIcon={errorWarningIcon}
      htmlFor={htmlFor}
      required={required}
      variant={variant}
    >
      {variant && <S.Variant variant={variant}>{getVariantIcon(variant)}</S.Variant>}
      {disabled && (
        <S.Disabled>{disabledIcon || <Icon name="special_pipeline" size="sm" />}</S.Disabled>
      )}
      {children}
      {required && <S.Required>*</S.Required>}
    </S.Label>
  )
}

Label.propTypes = {
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  disabledIcon: PropTypes.node,
  errorWarningIcon: PropTypes.node,
  /** Name of the linked form element */
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(['error', 'warning'])
}
