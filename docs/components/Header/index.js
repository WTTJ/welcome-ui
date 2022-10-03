import React, { useState, useEffect } from 'react'
import { Box } from '@welcome-ui/box'
import { MenuIcon } from '@welcome-ui/icons'
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
  const [hasBeenHydrated, setHasBeenHydrated] = useState(false)

  // Workaround for hydration warning UI for Reakit dialog (fix in ariakit 2.0)
  useEffect(() => {
    setHasBeenHydrated(true)
  }, [])

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
            apiKey="32543c62b03cbc6b714a873dca1feec4"
            appId="1ZI5OZ0946"
            disableUserPersonalization
            indexName="welcome-ui"
            placeholder="Search the docs"
          />
        </Box>
        <ThemeSelector ml="lg" />
      </Box>
      <NavBar display={{ xs: 'none', md: 'flex' }} />

      {hasBeenHydrated && (
        <>
          <Drawer.Trigger
            {...mobileMenuDrawer}
            as={Button}
            display={{ md: 'none' }}
            shape="circle"
            size="sm"
          >
            {mobileMenuDrawer.visible ? <CrossIcon /> : <MenuIcon />}
          </Drawer.Trigger>
          <Drawer.Backdrop {...mobileMenuDrawer} backdropVisible={false}>
            <S.MenuMobileDrawer aria-label="Menu backdrop" {...mobileMenuDrawer}>
              <NavBar isMobileMenu mb="lg" />
              <ComponentsList onClick={() => mobileMenuDrawer.hide()} />
            </S.MenuMobileDrawer>
          </Drawer.Backdrop>
        </>
      )}
    </S.Header>
  )
}
