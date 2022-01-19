/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { HeartIcon } from '@welcome-ui/icons.heart'
import { GithubIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'

import { useThemeContext } from '../../context/theme'
import { Header } from '../Header'
import { LogoWttj } from '../LogoWttj'
import { ComponentsList } from '../ComponentsList'
import { Logo } from '../Logo'

import * as S from './styles'

export function Layout({ children }) {
  const theme = useThemeContext()

  return (
    <S.Layout>
      <Header />
      <Box display="flex">
        <S.Navigation>
          <ComponentsList />
        </S.Navigation>
        <S.Content>
          {children}
          <Box
            alignItems="center"
            as="footer"
            borderTop="1px solid"
            borderTopColor="nude.200"
            display="flex"
            justifyContent="space-between"
            mb="md"
            mt={50}
            mx={{ xs: 'md', md: 'xxl' }}
            pt="xxl"
          >
            <Box display={{ xs: 'none', md: ' block' }}>
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
        </S.Content>
      </Box>
    </S.Layout>
  )
}
