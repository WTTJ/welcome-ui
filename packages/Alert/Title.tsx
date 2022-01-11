import React from 'react'
import { VariantIcon, VariantIconOptions } from '@welcome-ui/variant-icon'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

import { AlertOptions } from '.'

export type AlertTitleProps = CreateWuiProps<'h5', VariantIconOptions & AlertOptions>

/**
 * @name Alert.Title
 */
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
