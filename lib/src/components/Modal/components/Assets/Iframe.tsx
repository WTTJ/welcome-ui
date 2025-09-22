import { Box } from '@old/Box'

import * as S from './styles'
import type { IframeProps } from './types'

export const Iframe = ({ children }: IframeProps) => {
  return (
    <S.Iframe>
      <Box h="100%" margin="0 auto" style={{ aspectRatio: 16 / 9 }}>
        {children}
      </Box>
    </S.Iframe>
  )
}
