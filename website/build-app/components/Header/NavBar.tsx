import React from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

import * as S from './styles'

import { navigation } from '.'

import { Box } from '@/Box'
import { Flex } from '@/Flex'
import { Text } from '@/Text'
import { Button } from '@/Button'
import { ThemeValues } from '@/theme'
import { CrescentMoonIcon, GithubIcon, SunIcon } from '@/Icons'

type NavBarProps = {
  display?: ThemeValues['display']
  onClick?: () => void
}

export const NavBar = ({ display = 'flex', onClick }: NavBarProps) => {
  const currentRoute = usePathname()
  const { setTheme, theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const switchTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <Flex alignItems="center" display={display} gap="xl" h={{ lg: '100%' }}>
      <Box as="nav" h={{ lg: '100%' }}>
        <Flex aria-label="Main navigation" as="ul" gap="xxl" h={{ lg: '100%' }}>
          {navigation.map(item => (
            <Text as="li" key={`header_navigation_${item}`} onClick={onClick} variant="subtitle-md">
              <S.A
                aria-current={currentRoute.startsWith(`/${item}`) ? 'page' : undefined}
                href={`/${item}`}
              >
                {item}
              </S.A>
            </Text>
          ))}
        </Flex>
      </Box>
      <Button
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        onClick={switchTheme}
        shape="circle"
        size="sm"
        variant="ghost"
      >
        {isDarkMode ? <SunIcon /> : <CrescentMoonIcon />}
      </Button>
      <Button
        aria-label="Github"
        as="a"
        href="https://github.com/WTTJ/welcome-ui"
        rel="noreferrer noopener"
        shape="circle"
        size="sm"
        target="_blank"
        variant="ghost"
      >
        <GithubIcon />
      </Button>
    </Flex>
  )
}
