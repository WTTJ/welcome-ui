import React from 'react'
import { VariantIcon } from '@welcome-ui/variant-icon'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

import { Variant } from '.'

export interface TitleOptions {
  variant?: Variant
  icon?: JSX.Element
}

export type TitleProps = TitleOptions & WuiProps

export const Title: React.FC<TitleProps> = ({ children, icon, variant = 'info', ...rest }) => (
  <S.Title variant={variant} {...rest}>
    <VariantIcon icon={icon} variant={variant} />
    {children}
  </S.Title>
)
