import React from 'react'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

import { AlertOptions } from '.'

export type AlertTitleProps = CreateWuiProps<'h5', AlertOptions>

/**
 * @name Alert.Title
 */
export const Title: React.FC<AlertTitleProps> = ({ children, dataTestId, variant, ...rest }) => {
  return (
    <S.Title data-testid={dataTestId} {...rest} variant={variant}>
      {children}
    </S.Title>
  )
}
