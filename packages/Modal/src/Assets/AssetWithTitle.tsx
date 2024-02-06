import React from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import styled from '@xstyled/styled-components'
import { forwardRef } from '@welcome-ui/system'

import { Iframe } from './styles'
import * as S from './styles'

type AssetWithTitleProps = {
  children: React.ReactNode
  subtitle?: JSX.Element | string
  title?: JSX.Element | string
  customContent?: JSX.Element | string
}

const titleBlockMobile = '4rem'
const titleBlockDesktop = '6rem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: auto;
    max-width: fit-content;
    max-height: calc(100vh - 2 * 5rem - ${titleBlockMobile});
    flex-shrink: 0;

    @media (min-width: md) {
      max-height: calc(100vh - 2 * 5rem - ${titleBlockDesktop});
    }
  }

  ${Iframe} {
    background-color: dark-900;
    max-height: calc(100vh - 2 * 5rem - ${titleBlockMobile});

    @media (min-width: md) {
      max-height: calc(100vh - 2 * 5rem - ${titleBlockDesktop});
    }
  }
`

export const AssetWithTitle = forwardRef<'div', AssetWithTitleProps>(
  ({ children, customContent, subtitle, title }, ref) => {
    return (
      <Wrapper ref={ref}>
        {children}
        <Box
          backgroundColor="light-900"
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
          {!customContent && subtitle && <Text variant="subtitle-sm">{subtitle}</Text>}
          {!customContent && title && <S.Title>{title}</S.Title>}
        </Box>
      </Wrapper>
    )
  }
)
