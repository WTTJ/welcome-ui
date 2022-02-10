import React from 'react'
import { Box } from '@welcome-ui/box'
import { MenuIcon } from '@welcome-ui/icons.menu'
import NextLink from 'next/link'
import { Drawer, useDrawerState } from '@welcome-ui/drawer'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons'
import { DocSearch } from '@docsearch/react'
import { useRouter } from 'next/router'
import '@docsearch/css'

import { ComponentsList } from '../ComponentsList'
import { Logo } from '../Logo'

import { ThemeSelector } from './ThemeSelector'
import * as S from './styles'
import { NavBar } from './NavBar'

export function Header() {
  const mobileMenuDrawer = useDrawerState()
  const { pathname } = useRouter()
  const variants = {
    '/': 'gray',
  }
  const variant = variants[pathname]

  return (
    <S.Header variant={variant}>
      <Box alignItems="center" display="flex">
        <NextLink href="/" passHref>
          <Box alignItems="center" alt="Homepage" as="a" display="flex">
            <Logo h={37} isDark={variant === 'gray'} w={63} />
          </Box>
        </NextLink>
        <Box ml="lg" w={{ xs: 180, md: 220 }}>
          <DocSearch
            apiKey="85801aa252bde17259c4a5a61c1e84db"
            disableUserPersonalization
            indexName="welcome-ui"
            placeholder="Search the docs"
          />
        </Box>
        <ThemeSelector ml="lg" />
      </Box>
      <NavBar display={{ xs: 'none', md: 'flex' }} />
      <Drawer.Trigger
        {...mobileMenuDrawer}
        as={Button}
        display={{ md: 'none' }}
        shape="circle"
        size="sm"
      >
        {mobileMenuDrawer.visible ? <CrossIcon /> : <MenuIcon />}
      </Drawer.Trigger>
      <S.MenuMobileDrawer aria-label="Menu backdrop" {...mobileMenuDrawer}>
        <NavBar isMobileMenu mb="xl" />
        <ComponentsList onClick={() => mobileMenuDrawer.hide()} />
      </S.MenuMobileDrawer>
    </S.Header>
  )
}
