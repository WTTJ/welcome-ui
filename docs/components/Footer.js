import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { HeartIcon } from '@welcome-ui/icons.heart'
import { GithubIcon } from '@welcome-ui/icons.github'

import { useThemeContext } from '../context/theme'

import { LogoWttj } from './LogoWttj'
import { Logo } from './Logo'

export function Footer(props) {
  const theme = useThemeContext()

  return (
    <Box alignItems="center" as="footer" display="flex" justifyContent="space-between" {...props}>
      <Box display={{ xs: 'none', md: 'block' }}>
        <Logo h={37} isDark w={63} />
      </Box>
      <Box alignItems="center" display="flex">
        Made with <HeartIcon color="primary.500" mx="xxs" /> by{' '}
        <Box
          alignItems="center"
          as="a"
          display="flex"
          href="https://www.welcometothejungle.com"
          ml="xs"
          rel="noopener"
          target="_blank"
        >
          <LogoWttj black={theme !== 'dark'} h={24} w={74} />
        </Box>
      </Box>
      <Button
        as="a"
        h={25}
        href="https://github.com/WTTJ/welcome-ui"
        rel="noopener"
        shape="circle"
        target="_blank"
        variant="secondary"
        w={25}
      >
        <GithubIcon />
      </Button>
    </Box>
  )
}
