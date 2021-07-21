import React from 'react'
import { ShapeProps } from '@welcome-ui/shape'
import { WuiProps } from '@welcome-ui/system'

import * as S from './Cover.styles'

export interface CoverProps {
  src: string
}

export const Cover: React.FC<CoverProps & ShapeProps & WuiProps> = ({ src, ...rest }) => (
  <S.Cover {...rest}>
    <img src={src} />
  </S.Cover>
)
