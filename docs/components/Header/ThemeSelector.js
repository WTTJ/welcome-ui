import React from 'react'
import { DropdownMenu, useDropdownMenuState } from '@welcome-ui/dropdown-menu'
import { Box } from '@welcome-ui/box'
import { StarIcon, SunIcon, CrescentMoonIcon, StarOutlineIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'
import { Badge } from '@welcome-ui/badge'

import { useSetThemeContext, useThemeContext } from '../../context/theme'

export function ThemeSelector(props) {
  const setTheme = useSetThemeContext()
  const menu = useDropdownMenuState({ gutter: 10 })
  const theme = useThemeContext()

  const handleSetTheme = theme => {
    setTheme(theme)
    menu.hide()
  }

  const options = [
    { value: 'core', label: 'Core Theme', icon: SunIcon },
    { value: 'dark', label: 'Dark Theme', icon: CrescentMoonIcon, isBeta: true },
    { value: 'welcome', label: 'Welcome Theme', icon: StarOutlineIcon },
    { value: 'welcomeDark', label: 'Welcome Dark Theme', icon: StarIcon, isBeta: true },
  ]

  return (
    <>
      <DropdownMenu.Trigger as={Button} $h="30px" shape="circle" $w="30px" {...menu} {...props}>
        <SunIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu {...menu} aria-label="Theme selector">
        {options?.map(({ icon: Icon, label, value, isBeta }) => (
          <DropdownMenu.Item
            $color={theme === value ? 'dark-900' : undefined}
            $fontWeight={theme === value ? 'bold' : undefined}
            key={value}
            onClick={() => handleSetTheme(value)}
            {...menu}
          >
            <Icon $mr="md" size="sm" />
            <Box>{label}</Box>
            {isBeta && (
              <Badge size="sm" $ml="xs">
                beta
              </Badge>
            )}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu>
    </>
  )
}
