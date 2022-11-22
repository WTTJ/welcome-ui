import React from 'react'
import { MenuArrowOptions } from 'reakit/Menu'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Arrow.styled'

const transformMap: Record<string, string> = {
  top: 'rotateZ(180deg)',
  right: 'rotateZ(-90deg)',
  bottom: 'rotateZ(360deg)',
  left: 'rotateZ(90deg)',
}

export type ArrowProps = CreateWuiProps<'div', MenuArrowOptions>

export const Arrow = forwardRef<'div', ArrowProps>((props, ref) => {
  // get the correct transform style for arrow
  const { placement } = props
  const transform = transformMap[placement]

  return (
    <S.Arrow {...props} ref={ref}>
      <Box
        $h="30px"
        $transform={transform}
        $w="30px"
        as="svg"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 30L15 22L23 30H7Z" fill="currentColor" fillRule="nonzero" id="stroke" />
        <path d="M8 30L15 23L22 30H8Z" fill="currentColor" fillRule="nonzero" />
      </Box>
    </S.Arrow>
  )
})

Arrow.displayName = 'Arrow'
