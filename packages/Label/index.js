import React, { forwardRef } from 'react'
import { bool, node, oneOf } from 'prop-types'
import Icon from '@welcome-ui/icon'
import VariantIcon from '@welcome-ui/variant-icon'

import { wrap } from '../Core/utils/wrap'

import * as S from './styles'

export const Label = forwardRef(
  (
    {
      checkableField,
      children,
      dataTestId,
      disabled,
      disabledIcon,
      errorWarningIcon,
      variant,
      ...rest
    },
    ref
  ) => {
    // Wrap strings in span to allow for required asterisk
    const content = wrap(children)

    return (
      <S.Label
        data-testid={dataTestId}
        disabled={disabled}
        disabledIcon={disabledIcon}
        ref={ref}
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
  checkableField: bool,
  children: node,
  disabled: bool,
  disabledIcon: node,
  errorWarningIcon: node,
  variant: oneOf(['error', 'warning'])
}

export default Label

export const StyledLabel = S.Label
