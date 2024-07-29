'use client'
import Link from 'next/link'
import { Flex } from '@welcome-ui/flex'
import { Button } from '@welcome-ui/button'
import { Drawer, useDrawer } from '@welcome-ui/drawer'
import { Icons } from '@welcome-ui/icons.font'
import { usePathname } from 'next/navigation'
import { Box } from '@welcome-ui/box'

import { VersionSelector } from '../VersionSelector'
import { Sidebar } from '../Sidebar'
import { Search } from '../Search'
import { ThemeSelector } from '../ThemeSelector'

import { Logo } from './Logo'
import * as S from './styles'
import { NavBar } from './NavBar'

import { PageTree } from '@/build-app/types'

export const navigation = ['foundations', 'components', 'blog']

type HeaderProps = {
  foundations: PageTree
  components: PageTree
}

export const Header = ({ components, foundations }: HeaderProps) => {
  const drawer = useDrawer()
  const pathname = usePathname()

  const handleCloseDrawer = () => {
    drawer.hide()
  }

  let menu
  if (pathname.startsWith('/components')) {
    menu = components
  }
  if (pathname.startsWith('/foundations')) {
    menu = foundations
  }

  return (
    <S.Header>
      <Flex
        alignItems="center"
        gap="lg"
        h="100%"
        justifyContent="space-between"
        margin="0 auto"
        maxWidth={1400}
        px="md"
      >
        <Flex alignItems="center" gap="lg">
          <Box flexShrink={0}>
            <Link href="/">
              <Logo h={40} />
            </Link>
          </Box>
          <VersionSelector />
          <Search />
          <ThemeSelector />
        </Flex>
        <Drawer.Trigger
          as={Button}
          display={{ lg: 'none' }}
          flexShrink={0}
          shape="circle"
          size="sm"
          store={drawer}
        >
          <Icons.Menu />
        </Drawer.Trigger>
        <NavBar display={{ _: 'none', lg: 'flex' }} />
        <Drawer display={{ lg: 'none' }} size="100%" store={drawer} withBackdrop zIndex={999}>
          <Drawer.Content pt="4xl">
            <NavBar onClick={handleCloseDrawer} />
            {menu && <Sidebar isSubPage menu={menu} onClick={handleCloseDrawer} />}
          </Drawer.Content>
        </Drawer>
      </Flex>
    </S.Header>
  )
}
