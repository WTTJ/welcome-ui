import React from 'react'

import { Box } from '@/Box'

import * as S from './styles'

type IframeProps = {
  children: JSX.Element
}

export const Iframe = ({ children }: IframeProps) => {
  return (
    <S.Iframe>
      <Box h="100%" margin="0 auto" style={{ aspectRatio: 16 / 9 }}>
        {children}
      </Box>
    </S.Iframe>
  )
}
