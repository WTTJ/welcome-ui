import React from 'react'
import { VariantIcon, VariantIconProps } from '@welcome-ui/variant-icon'

import * as S from './styles'

import { AlertOptions } from '.'

export type AlertTitleProps = VariantIconProps & AlertOptions

export const Title: React.FC<AlertTitleProps> = ({
  children,
  dataTestId,
  icon,
  variant,
  ...rest
}) => {
  return (
    <S.Title data-testid={dataTestId} variant={variant} {...rest}>
      <VariantIcon icon={icon} mr="xs" variant={variant} />
      {children}
    </S.Title>
  )
}
