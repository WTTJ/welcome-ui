import React from 'react'
import { MenuArrowOptions } from 'reakit/Menu'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Arrow.styled'

const transformMap: Record<string, string> = {
  top: 'rotateZ(180deg)',
  right: 'rotateZ(-90deg)',
  bottom: 'rotateZ(360deg)',
  left: 'rotateZ(90deg)',
}

export type ArrowProps = CreateWuiProps<'div', MenuArrowOptions>

export const Arrow = forwardRef<'div', ArrowProps>(props => {
  // get the correct transform style for arrow
  const { placement } = props
  const transform = transformMap[placement]

  return (
    <S.Arrow {...props}>
      <S.ArrowItem $transform={transform} h={11} w={16} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8L8 0L16 8H0Z" fill="currentColor" fillRule="nonzero" id="stroke" />
        <path d="M1 8L8 1L15 8H1Z" fill="currentColor" fillRule="nonzero" />
      </S.ArrowItem>
    </S.Arrow>
  )
})

Arrow.displayName = 'Arrow'
