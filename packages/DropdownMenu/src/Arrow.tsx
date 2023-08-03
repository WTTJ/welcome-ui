import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Arrow.styled'

const transformMap: Record<string, string> = {
  top: 'rotateZ(180deg)',
  right: 'rotateZ(-90deg)',
  bottom: 'rotateZ(360deg)',
  left: 'rotateZ(90deg)',
}

export type ArrowProps = CreateWuiProps<'div', Ariakit.MenuArrowProps>

export const Arrow = forwardRef<'div', ArrowProps>(({ store }, ref) => {
  const currentPlacement = store?.useState('currentPlacement')
  const [placement] = currentPlacement.split('-')

  return (
    <Ariakit.MenuArrow ref={ref} render={<S.Arrow />}>
      <S.ArrowItem
        $transform={transformMap[placement]}
        h={30}
        viewBox="0 0 30 30"
        w={30}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 30L15 22L23 30H7Z" fill="currentColor" fillRule="nonzero" id="stroke" />
        <path d="M8 30L15 23L22 30H8Z" fill="currentColor" fillRule="nonzero" />
      </S.ArrowItem>
    </Ariakit.MenuArrow>
  )
})

Arrow.displayName = 'Arrow'
