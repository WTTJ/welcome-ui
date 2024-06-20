'use client'
import Link from 'next/link'
import { Flex } from '@welcome-ui/flex'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'
import { Icons } from '@welcome-ui/icons.font'
import { usePathname } from 'next/navigation'
import { Text } from '@welcome-ui/text'

import { VersionSelector } from '../VersionSelector'

import { Logo } from './Logo'
import * as S from './styles'

const navigation = ['foundations', 'components']

export const Header = () => {
  const currentRoute = usePathname()

  return (
    <S.Header>
      <Flex
        alignItems="center"
        gap="xl"
        h="100%"
        justifyContent="space-between"
        margin="0 auto"
        maxWidth={1400}
        px="md"
      >
        <Flex alignItems="center" gap="xl">
          <Link href="/">
            <Logo h={40} />
          </Link>
          <VersionSelector />
        </Flex>
        <Flex alignItems="center" gap="xl" h="100%">
          <Box as="nav" h="100%">
            <Flex aria-label="Main navigation" as="ul" gap="xxl" h="100%">
              {navigation.map(item => (
                <Text as="li" key={`header_navigation_${item}`} variant="subtitle-md">
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
          <Button shape="circle" size="sm" variant="ghost">
            <Icons.Search />
          </Button>
        </Flex>
      </Flex>
    </S.Header>
  )
}
