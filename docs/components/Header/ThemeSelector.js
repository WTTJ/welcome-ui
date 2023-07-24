import React from 'react'
import { DropdownMenu, useDropdownMenu } from '@welcome-ui/dropdown-menu'
import { Box } from '@welcome-ui/box'
import { CrescentMoonIcon, StarIcon, StarOutlineIcon, SunIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'
import { Badge } from '@welcome-ui/badge'

import { useSetThemeContext, useThemeContext } from '../../context/theme'

export const ThemeSelector = props => {
  const setTheme = useSetThemeContext()
  const dropdownMenu = useDropdownMenu()
  const theme = useThemeContext()

  const handleSetTheme = theme => {
    setTheme(theme)
    dropdownMenu.hide()
  }

  const options = [
    { value: 'core', label: 'Core Theme', icon: SunIcon },
    { value: 'dark', label: 'Dark Theme', icon: CrescentMoonIcon, isBeta: true },
    { value: 'welcome', label: 'Welcome Theme', icon: StarOutlineIcon },
    { value: 'welcomeDark', label: 'Welcome Dark Theme', icon: StarIcon, isBeta: true },
  ]

  return (
    <>
      <DropdownMenu.Trigger
        as={Button}
        h={30}
        shape="circle"
        store={dropdownMenu}
        w={30}
        {...props}
      >
        <SunIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu aria-label="Theme selector" store={dropdownMenu}>
        {options?.map(({ icon: Icon, isBeta, label, value }) => (
          <DropdownMenu.Item
            color={theme === value ? 'dark-900' : undefined}
            fontWeight={theme === value ? 'bold' : undefined}
            key={value}
            onClick={() => handleSetTheme(value)}
          >
            <Icon mr="md" size="sm" />
            <Box>{label}</Box>
            {isBeta && (
              <Badge ml="xs" size="sm">
                beta
              </Badge>
            )}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu>
    </>
  )
}
