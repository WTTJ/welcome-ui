import React, { useMemo } from 'react'
import { node, oneOf } from 'prop-types'
import { AlertIcon } from '@welcome-ui/icons.alert'
import { CheckIcon } from '@welcome-ui/icons.check'
import { InformationIcon } from '@welcome-ui/icons.information'

import * as S from './styles'

export const VariantIcon = ({ icon, variant, ...rest }) => {
  const Icon = useMemo(() => {
    if (icon === null) return null
    if (icon) return icon
    if (variant === 'success') return <CheckIcon />
    if (variant === 'info') return <InformationIcon />
    if (variant === 'error' || variant === 'warning') return <AlertIcon />
  }, [icon, variant])

  return Icon ? (
    <S.VariantIcon variant={variant} {...rest}>
      {Icon}
    </S.VariantIcon>
  ) : null
}

VariantIcon.displayName = 'VariantIcon'

VariantIcon.propTypes /* remove-proptypes */ = {
  icon: node,
  variant: oneOf(['info', 'success', 'warning', 'error'])
}
