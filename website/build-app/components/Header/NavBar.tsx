import React from 'react'
import { Box } from '@welcome-ui/box'
import { Flex } from '@welcome-ui/flex'
import { usePathname } from 'next/navigation'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import { Icons } from '@welcome-ui/icons.font'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

import { navigation } from '.'

type NavBarProps = {
  display?: WuiProps['display']
  onClick?: () => void
}

export const NavBar = ({ display = 'flex', onClick }: NavBarProps) => {
  const currentRoute = usePathname()

  return (
    <Flex alignItems="center" display={display} gap="xl" h={{ lg: '100%' }}>
      <Box as="nav" h={{ lg: '100%' }}>
        <Flex aria-label="Main navigation" as="ul" gap="xxl" h={{ lg: '100%' }}>
          {navigation.map(item => (
            <Text as="li" key={`header_navigation_${item}`} onClick={onClick} variant="subtitle-md">
              <S.A
                aria-current={currentRoute.startsWith(`/${item}`) ? 'page' : undefined}
                href={`/${item}`}
              >
                {item}
              </S.A>
            </Text>
          ))}
        </Flex>
      </Box>
      <Button
        aria-label="Github"
        as="a"
        href="https://github.com/WTTJ/welcome-ui"
        rel="noreferrer noopener"
        shape="circle"
        size="sm"
        target="_blank"
        variant="ghost"
      >
        <Icons.Github />
      </Button>
    </Flex>
  )
}
