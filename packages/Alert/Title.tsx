import React from 'react'
import { VariantIcon, VariantIconProps } from '@welcome-ui/variant-icon'
import { WuiProps } from '@welcome-ui/system'
import { AlertProps } from '@welcome-ui/alert'

import * as S from './styles'

export const Title: React.FC<
  VariantIconProps & AlertProps & WuiProps & { dataTestId?: string }
> = ({ children, dataTestId, icon, variant, ...rest }) => {
  return (
    <S.Title data-testid={dataTestId} variant={variant} {...rest}>
      <VariantIcon icon={icon} mr="xs" variant={variant} />
      {children}
    </S.Title>
  )
}
