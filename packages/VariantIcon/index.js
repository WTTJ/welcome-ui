import React from 'react'
import { node, oneOf } from 'prop-types'
import { Badge } from '@welcome-ui/badge'

import * as S from './styles'

export const VariantIcon = ({ errorWarningIcon, variant }) =>
  ['error', 'warning'].includes(variant) ? (
    <S.VariantIcon>
      <>
        {errorWarningIcon && errorWarningIcon}
        {!errorWarningIcon && (
          <Badge shape="circle" variant={variant}>
            !
          </Badge>
        )}
      </>
    </S.VariantIcon>
  ) : null

VariantIcon.displayName = 'VariantIcon'

VariantIcon.propTypes = {
  errorWarningIcon: node,
  variant: oneOf(['warning', 'error'])
}
