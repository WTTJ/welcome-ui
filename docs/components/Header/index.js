import React from 'react'
import { Box } from '@welcome-ui/box'
import { InformationIcon, MenuIcon } from '@welcome-ui/icons'
import NextLink from 'next/link'
import { Drawer, useDrawer } from '@welcome-ui/drawer'
import { useModal } from '@welcome-ui/modal'
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

export const Header = () => {
  const mobileMenuDrawer = useDrawer()
  const modal = useModal()
  const { pathname } = useRouter()
  const variants = {
    '/': 'gray',
  }
  const variant = variants[pathname]

  function openThemeHelper() {
    modal.show()
  }

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
        <ThemeSelector ml="lg" display={{ _: 'none', md: 'flex' }} />
        <Button
          h={30}
          ml="xxs"
          display={{ _: 'none', md: 'flex' }}
          onClick={openThemeHelper}
          shape="circle"
          variant="ghost"
          w={30}
        >
          <InformationIcon color="light-900" />
        </Button>
      </Box>
      <NavBar display={{ xs: 'none', md: 'flex' }} />
      <>
        <Drawer.Trigger
          flexShrink={0}
          as={Button}
          display={{ md: 'none' }}
          shape="circle"
          size="sm"
          store={mobileMenuDrawer}
        >
          {mobileMenuDrawer.open ? <CrossIcon /> : <MenuIcon />}
        </Drawer.Trigger>
        <S.MenuMobileDrawer
          withBackdrop={false}
          store={mobileMenuDrawer}
          aria-label="Menu backdrop"
          withCloseButton={false}
        >
          <NavBar drawerState={mobileMenuDrawer} isMobileMenu mb="lg" />
          <ComponentsList onClick={() => mobileMenuDrawer.hide()} />
        </S.MenuMobileDrawer>
      </>
      <ThemeHelper modalStore={modal} />
    </S.Header>
  )
}
