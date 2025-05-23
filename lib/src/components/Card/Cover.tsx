import React from 'react'

import type { ShapeProps } from '@/Shape'

import * as S from './Cover.styles'

export interface CoverOptions {
  src: string
}

export type CoverProps = CoverOptions & ShapeProps

/**
 * @name Card.Cover
 */
export const Cover: React.FC<CoverProps> = ({ src, ...rest }) => (
  <S.Cover {...rest}>
    <img src={src} />
  </S.Cover>
)
