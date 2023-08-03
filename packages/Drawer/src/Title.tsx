import React from 'react'
import { Text, TextProps } from '@welcome-ui/text'

import * as S from './styles'

export const Title: React.FC<TextProps> = ({ children, zIndex = '1', ...props }) => {
  return (
    <S.Title
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      position={{ xs: 'sticky', md: 'static' }}
      top={{ xs: 0, md: 'auto' }}
      w="100%"
      zIndex={zIndex}
      {...props}
    >
      <Text m="0" variant="h3" w="100%">
        {children}
      </Text>
    </S.Title>
  )
}
