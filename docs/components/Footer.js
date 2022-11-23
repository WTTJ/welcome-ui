import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { HeartIcon, GithubIcon } from '@welcome-ui/icons'

import { useThemeContext } from '../context/theme'

import { LogoWttj } from './LogoWttj'
import { Logo } from './Logo'

export function Footer(props) {
  const theme = useThemeContext()

  return (
    <Box
      $alignItems="center"
      as="footer"
      $display="flex"
      $justifyContent="space-between"
      {...props}
    >
      <Box $display={{ xs: 'none', md: 'block' }}>
        <Logo $h="37px" isDark w="63px" />
      </Box>
      <Box $alignItems="center" $display="flex">
        Made with <HeartIcon $color="primary-500" $mx="sm" /> by{' '}
        <Box
          $alignItems="center"
          as="a"
          $display="flex"
          href="https://www.welcometothejungle.com"
          $ml="sm"
          rel="noopener"
          target="_blank"
        >
          <LogoWttj black={theme !== 'dark'} $h="24px" w="74px" />
        </Box>
      </Box>
      <Button
        as="a"
        $h="25px"
        href="https://github.com/WTTJ/welcome-ui"
        rel="noopener"
        shape="circle"
        target="_blank"
        variant="secondary"
        $w="25px"
      >
        <GithubIcon />
      </Button>
    </Box>
  )
}
