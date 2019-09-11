import React, { forwardRef } from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'

import { Icon } from '../Icon'
import { VariantIcon } from '../VariantIcon'
import { COMPONENT_TYPE, wrap } from '../../utils'

import * as S from './styles'

export const Label = forwardRef(
  (
    {
      as,
      checkableField,
      children,
      dataTestId,
      disabled,
      disabledIcon,
      errorWarningIcon,
      htmlFor,
      onClick,
      required,
      variant,
      ...rest
    },
    ref
  ) => {
    // Wrap strings in span to allow for required asterisk
    const content = wrap(children)

    return (
      <S.Label
        as={as}
        data-testid={dataTestId}
        disabled={disabled}
        disabledIcon={disabledIcon}
        htmlFor={htmlFor}
        onClick={onClick}
        ref={ref}
        required={required}
        variant={variant}
        {...rest}
      >
        {!checkableField && <VariantIcon errorWarningIcon={errorWarningIcon} variant={variant} />}
        {disabled && <S.Disabled>{disabledIcon || <Icon name="special_pipeline" />}</S.Disabled>}
        {content}
      </S.Label>
    )
  }
)

Label.displayName = 'Label'

Label.propTypes = {
  as: COMPONENT_TYPE,
  checkableField: bool,
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
