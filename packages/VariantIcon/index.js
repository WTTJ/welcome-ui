import React from 'react'
import { node, oneOf } from 'prop-types'
import { AlertIcon } from '@welcome-ui/icons.alert'

import * as S from './styles'

export const VariantIcon = ({ errorWarningIcon, variant }) =>
  ['error', 'warning'].includes(variant) ? (
    <S.VariantIcon variant={variant}>
      <>
        {errorWarningIcon && errorWarningIcon}
        {!errorWarningIcon && <AlertIcon />}
      </>
    </S.VariantIcon>
  ) : null

VariantIcon.displayName = 'VariantIcon'

VariantIcon.propTypes /* remove-proptypes */ = {
  errorWarningIcon: node,
  variant: oneOf(['warning', 'error'])
}
