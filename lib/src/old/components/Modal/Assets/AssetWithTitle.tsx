import styled from '@xstyled/styled-components'
import React from 'react'

import { Box } from '@old/Box'
import { forwardRef } from '@old/System'

import { Text } from '../../Text'

import { Iframe } from './styles'
import * as S from './styles'

type AssetWithTitleProps = {
  children: React.ReactNode
  customContent?: JSX.Element | string
  subtitle?: JSX.Element | string
  title?: JSX.Element | string
}

const titleBlockMobile = '4rem'
const titleBlockDesktop = '6rem'

const Wrapper = styled.divBox`
  display: flex;
  flex-direction: column;
  border-radius: xxl;
  overflow: hidden;

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
    background-color: neutral-90;
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
      </Wrapper>
    )
  }
)
