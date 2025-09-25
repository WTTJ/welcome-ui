import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/Button'
import { CrescentMoonIcon, GithubIcon, SunIcon } from '@/components/Icon'
import { Text } from '@/components/Text'

import * as S from './styles'

import { navigation } from '.'

type NavBarProps = {
  className?: string
  onClick?: () => void
}

export const NavBar = ({ className, onClick }: NavBarProps) => {
  const currentRoute = usePathname()
  const { setTheme, theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const switchTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className={`flex gap-xl items-center lg:h-full ${className}`}>
      <nav className="lg:h-full">
        <ul aria-label="Main navigation" className="flex gap-xxl lg:h-full">
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
        </ul>
      </nav>
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
    </div>
  )
}
