import React, { forwardRef } from 'react'
import { bool, node, oneOf } from 'prop-types'
import { LockIcon } from '@welcome-ui/icons.lock'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { wrapChildren } from '@welcome-ui/utils'

import * as S from './styles'

export const Label = forwardRef(
  (
    {
      checkableField,
      children,
      dataTestId,
      disabled,
      disabledIcon,
      icon,
      variant,
      withDisabledIcon = true,
      ...rest
    },
    ref
  ) => {
    // Wrap strings in span to allow for required asterisk
    const content = wrapChildren(children)

    return (
      <S.Label
        data-testid={dataTestId}
        disabled={disabled}
        disabledIcon={disabledIcon}
        ref={ref}
        variant={variant}
        {...rest}
      >
        {!checkableField && <VariantIcon icon={icon} variant={variant} />}
        {disabled && withDisabledIcon && <S.Disabled>{disabledIcon || <LockIcon />}</S.Disabled>}
        {content}
      </S.Label>
    )
  }
)

Label.displayName = 'Label'

Label.propTypes /* remove-proptypes */ = {
  checkableField: bool,
  children: node,
  disabled: bool,
  disabledIcon: node,
  icon: node,
  variant: oneOf(['error', 'warning']),
  withDisabledIcon: bool
}

export const StyledLabel = S.Label
