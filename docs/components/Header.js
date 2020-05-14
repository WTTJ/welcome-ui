/* eslint-disable react/jsx-max-depth */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { GithubIcon } from '@welcome-ui/icons.github'
import { MenuIcon } from '@welcome-ui/icons.menu'

import { Logo } from './Logo'
import { LongLogo } from './LongLogo'
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <Box
      as="header"
      backgroundColor="dark.700"
      fontSize="body2"
      height={{ xs: 60, md: '100vh' }}
      left="0"
      maxWidth={{ md: '17rem' }}
      p={{ xs: 'lg', md: 'xl' }}
      position="fixed"
      top="0"
      width={1}
      zIndex={1}
    >
      <Box display="flex" justifyContent="space-between" w={1}>
        <a
          alt="welcome to the jungle"
          href="https://www.welcometothejungle.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Box display={{ xs: 'none', md: 'block' }}>
            <Logo height="5.5625rem" width="6rem" />
          </Box>
          <Box display={{ md: 'none' }}>
            <LongLogo height="2.25rem" width="6.25rem" />
          </Box>
        </a>
        <Box alignItems={{ xs: 'center', md: 'flex-start' }} display="flex">
          <Button
            alt="welcome to the jungle"
            as="a"
            borderRadius="100px"
            href="https://github.com/WTTJ/welcome-ui"
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
          >
            <GithubIcon />
            <span>Source</span>
          </Button>
          <Button display={{ md: 'none' }} ml="sm" shape="circle" size="sm" variant="secondary">
            <MenuIcon />
          </Button>
        </Box>
      </Box>
      <Box
        display={{ xs: 'none', md: 'block' }}
        height="calc(100% - 100px)"
        mt="xl"
        style={{ overflowY: 'auto' }}
      >
        <Navigation />
      </Box>
    </Box>
  )
}
