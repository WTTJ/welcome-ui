import React, { forwardRef } from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'

import { Badge } from '../Badge'
import { Icon } from '../Icon'
import { COMPONENT_TYPE, wrap } from '../../utils'

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
    {
      as,
      children,
      dataTestId,
      disabled,
      disabledIcon,
      errorWarningIcon,
      htmlFor,
      onClick,
      required,
      testId,
      variant,
      ...rest
    },
    ref
  ) => {
    const icon = variant && getVariantIcon(variant, errorWarningIcon)
    // Wrap strings in span to allow for required asterisk
    const content = wrap(children)

    return (
      <S.Label
        as={as}
        data-testid={dataTestId}
        disabled={disabled}
        disabledIcon={disabledIcon}
        errorWarningIcon={errorWarningIcon}
        htmlFor={htmlFor}
        onClick={onClick}
        ref={ref}
        required={required}
        variant={variant}
        {...rest}
      >
        {variant && <S.Icon variant={variant}>{icon}</S.Icon>}
        {disabled && <S.Disabled>{disabledIcon || <Icon name="special_pipeline" />}</S.Disabled>}
        {content}
      </S.Label>
    )
  }
)

Label.displayName = 'Label'

Label.propTypes = {
  as: COMPONENT_TYPE,
  children: node,
  dataTestId: string,
  disabled: bool,
  disabledIcon: node,
  errorWarningIcon: node,
  /** Name of the linked form element */
  htmlFor: string,
  onClick: func,
  required: bool,
  testId: string,
  variant: oneOf(['error', 'warning'])
}
