import { Text } from '@/components/Text'
import { Box } from '@old/Box'
import { forwardRef } from '@old/System'

import * as S from './styles'
import type { AssetWithTitleProps } from './types'

const titleBlockMobile = '4rem'
const titleBlockDesktop = '6rem'

export const AssetWithTitle = forwardRef<'div', AssetWithTitleProps>(
  ({ children, customContent, subtitle, title }, ref) => {
    return (
      <S.Wrapper
        $titleBlockDesktop={titleBlockDesktop}
        $titleBlockMobile={titleBlockMobile}
        ref={ref}
      >
        {children}
        <Box
          backgroundColor="neutral-10"
          display="flex"
          flexDirection="column"
          flexShrink={0}
          gap="xxs"
          h={{ _: titleBlockMobile, md: titleBlockDesktop }}
          justifyContent="center"
          px={{ _: 'md', md: 'xl' }}
          w="100%"
        >
          {customContent}
          {!customContent && subtitle ? <Text variant="subtitle-sm">{subtitle}</Text> : null}
          {!customContent && title ? <S.Title>{title}</S.Title> : null}
        </Box>
      </S.Wrapper>
    )
  }
)
