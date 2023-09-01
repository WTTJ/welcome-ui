import React from 'react'
import { CreateWuiProps } from '@welcome-ui/system'
import { TextPanda } from '@welcome-ui/text'
import { type HTMLStyledProps } from '@welcome-ui/panda/jsx'

import * as S from './styles'

import { AlertOptions } from '.'

export type AlertTitleProps = CreateWuiProps<'h5', AlertOptions>

/**
 * @name Alert.Title
 */
export const Title: React.FC<AlertTitleProps> = ({ children, dataTestId, variant, ...rest }) => {
  return (
    <S.Title data-testid={dataTestId} variant={variant} {...rest}>
      {children}
    </S.Title>
  )
}

type TitlePandaProps = HTMLStyledProps<'h5'>

/**
 * @name Alert.Title
 */
export const TitlePanda = React.forwardRef<HTMLHeadingElement, TitlePandaProps>(
  ({ children, ...rest }, ref) => {
    return (
      <TextPanda ref={ref} variant="h5" {...rest}>
        {children}
      </TextPanda>
    )
  }
)
