'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Box } from '@/Box'
import { Drawer, useDrawer } from '@/Drawer'
import { Flex } from '@/Flex'
import { MenuIcon } from '@/Icons'
import { WelcomeUILogo } from '@/Logo'

import type { PageTree } from '~/build-app/types'

import { Button } from '../../../../lib/src/components/Button'
import { Search } from '../Search'
import { Sidebar } from '../Sidebar'
import { VersionSelector } from '../VersionSelector'

import { NavBar } from './NavBar'
import * as S from './styles'

export const navigation = ['foundations', 'components', 'blog']

type HeaderProps = {
  components: PageTree
  foundations: PageTree
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
              <WelcomeUILogo h={40} />
            </Link>
          </Box>
          <VersionSelector />
          <Search />
        </Flex>
        <Drawer.Trigger
          as={Button}
          className="lg:hidden shrink-0"
          shape="circle"
          size="sm"
          store={drawer}
        >
          <MenuIcon />
        </Drawer.Trigger>
        <NavBar display={{ _: 'none', lg: 'flex' }} />
        <Drawer display={{ lg: 'none' }} size="100%" store={drawer} withBackdrop zIndex={999}>
          <Drawer.Content pt="4xl">
            <NavBar onClick={handleCloseDrawer} />
            {menu ? <Sidebar isSubPage menu={menu} onClick={handleCloseDrawer} /> : null}
          </Drawer.Content>
        </Drawer>
      </Flex>
    </S.Header>
  )
}
