import React, { forwardRef } from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'

import { Badge } from '../Badge'
import { Icon } from '../Icon'
import { COMPONENT_TYPE } from '../../utils'

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
  (
    { as, children, disabled, disabledIcon, errorWarningIcon, htmlFor, onClick, required, variant },
    ref
  ) => {
    const icon = variant && getVariantIcon(variant, errorWarningIcon)
    return (
      <S.Label
        as={as}
        disabled={disabled}
        disabledIcon={disabledIcon}
        errorWarningIcon={errorWarningIcon}
        htmlFor={htmlFor}
        onClick={onClick}
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
  as: COMPONENT_TYPE,
  children: node,
  disabled: bool,
  disabledIcon: node,
  errorWarningIcon: node,
  /** Name of the linked form element */
  htmlFor: string,
  onClick: func,
  required: bool,
  variant: oneOf(['error', 'warning'])
}
