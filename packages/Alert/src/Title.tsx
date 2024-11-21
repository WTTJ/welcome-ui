import React from 'react'
import { TextProps } from '@welcome-ui/text'

import * as S from './styles'

export type AlertTitleProps = Pick<TextProps, 'children' | 'dataTestId' | 'variant'>

/**
 * @name Alert.Title
 */
export const Title: React.FC<AlertTitleProps> = ({ children, dataTestId, variant }) => {
  return (
    <S.Title data-testid={dataTestId} variant={variant}>
      {children}
    </S.Title>
  )
}
