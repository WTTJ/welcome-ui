/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { HeartIcon } from '@welcome-ui/icons.heart'

import { useThemeContext } from '../context/theme'

import { Header } from './Header'
import { LogoWttj } from './LogoWttj'
import * as S from './Layout.styled'

export const Layout = ({ children }) => {
  const theme = useThemeContext()

  return (
    <S.Layout>
      <Header />
      <Box margin="0 auto" maxWidth={1} paddingLeft={{ md: 270 }} w={1280}>
        <Box
          as="main"
          mb={{ xs: '3xl', md: 0 }}
          minHeight="100vh"
          mt={{ xs: 60, md: 0 }}
          p={{ xs: 'xl', lg: 60 }}
        >
          {children}
          <Box
            alignItems="center"
            borderTop="1px solid"
            borderTopColor="nude.200"
            display="flex"
            justifyContent="center"
            mt="3xl"
            pt="md"
            w={1}
          >
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
        </Box>
      </Box>
    </S.Layout>
  )
}
