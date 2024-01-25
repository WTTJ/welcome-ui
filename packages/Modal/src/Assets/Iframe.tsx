import React from 'react'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

type IframeProps = {
  children: React.ReactHTMLElement<HTMLIFrameElement>
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
