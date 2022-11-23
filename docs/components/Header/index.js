import React, { useState, useEffect } from 'react'
import { Box } from '@welcome-ui/box'
import { MenuIcon, InformationIcon } from '@welcome-ui/icons'
import NextLink from 'next/link'
import { Drawer, useDrawerState } from '@welcome-ui/drawer'
import { Modal, useModalState } from '@welcome-ui/modal'

import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons'
import { DocSearch } from '@docsearch/react'
import { useRouter } from 'next/router'
import '@docsearch/css'

import { ComponentsList } from '../ComponentsList'
import { Logo } from '../Logo'
import { ThemeHelper } from '../ThemeHelper'

import { ThemeSelector } from './ThemeSelector'
import * as S from './styles'
import { NavBar } from './NavBar'

export function Header() {
  const mobileMenuDrawer = useDrawerState()
  const modal = useModalState()
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

  function openThemeHelper() {
    modal.show()
  }

  return (
    <S.Header variant={variant}>
      <Box $alignItems="center" $display="flex">
        <NextLink href="/" passHref>
          <Box $alignItems="center" alt="Homepage" as="a" $display="flex">
            <Logo $h="37px" isDark={variant === 'gray'} $w="63px" />
          </Box>
        </NextLink>
        <Box $ml="lg" $w={{ xs: '180px', md: '220px' }}>
          <DocSearch
            apiKey="32543c62b03cbc6b714a873dca1feec4"
            appId="1ZI5OZ0946"
            disableUserPersonalization
            indexName="welcome-ui"
            placeholder="Search the docs"
          />
        </Box>
        <ThemeSelector $ml="lg" />
        <Button
          onClick={openThemeHelper}
          $h="30px"
          shape="circle"
          $ml="xxs"
          variant="ghost"
          $w="30px"
        >
          <InformationIcon $color="light-900" />
        </Button>
      </Box>
      <NavBar $display={{ xs: 'none', md: 'flex' }} />
      {hasBeenHydrated && (
        <>
          <Drawer.Trigger
            {...mobileMenuDrawer}
            as={Button}
            $display={{ md: 'none' }}
            shape="circle"
            size="sm"
          >
            {mobileMenuDrawer.visible ? <CrossIcon /> : <MenuIcon />}
          </Drawer.Trigger>
          <Drawer.Backdrop {...mobileMenuDrawer} backdropVisible={false}>
            <S.MenuMobileDrawer aria-label="Menu backdrop" {...mobileMenuDrawer}>
              <NavBar isMobileMenu $mb="lg" />
              <ComponentsList onClick={() => mobileMenuDrawer.hide()} />
            </S.MenuMobileDrawer>
          </Drawer.Backdrop>
        </>
      )}
      <ThemeHelper modal={modal} />
    </S.Header>
  )
}
