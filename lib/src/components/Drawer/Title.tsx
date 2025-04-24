import type { TextProps } from '@/Text'
import { Text } from '@/Text'

import * as S from './styles'

export const Title: React.FC<TextProps> = ({ children, zIndex = '1', ...props }) => {
  return (
    <S.Title
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      position={{ md: 'static', xs: 'sticky' }}
      top={{ md: 'auto', xs: 0 }}
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
