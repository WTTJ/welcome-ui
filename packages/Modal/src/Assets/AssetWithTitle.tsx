import React from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import styled from '@xstyled/styled-components'

import { Iframe } from './styles'

type AssetWithTitleProps = {
  children: React.ReactNode
  subtitle?: JSX.Element | string
  title: JSX.Element | string
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

export const AssetWithTitle: React.FC<AssetWithTitleProps> = ({ children, subtitle, title }) => {
  return (
    <Wrapper>
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
        {subtitle && <Text variant="subtitle-sm">{subtitle}</Text>}
        <Text alignItems="center" display="inline-flex" lines={2} m="0" variant="h4">
          {title}
        </Text>
      </Box>
    </Wrapper>
  )
}
