import React from 'react'

import type { TextProps } from '@old/Text'

import * as S from './styles'

export type AlertTitleProps = Pick<TextProps, 'children' | 'dataTestId' | 'variant'> & {
  hasCloseButton?: boolean
}

/**
 * @name Alert.Title
 */
export const Title: React.FC<AlertTitleProps> = ({
  children,
  dataTestId,
  hasCloseButton,
  variant,
}) => {
  return (
    <S.Title data-testid={dataTestId} hasCloseButton={hasCloseButton} variant={variant}>
      {children}
    </S.Title>
  )
}
