import { Button } from '@welcome-ui/button'
import { CrescentMoonIcon, SunIcon } from '@welcome-ui/icons'
import { DropdownMenu, useDropdownMenu } from '@welcome-ui/dropdown-menu'
import React from 'react'

import { ThemeContext, ThemeValue } from '../ThemeProvider'

export const ThemeSelector = () => {
  const dropdownMenu = useDropdownMenu()

  return (
    <ThemeContext.Consumer>
      {({ schemeValue, setThemeSelected }) => {
        function handleClick(value: ThemeValue) {
          localStorage.setItem('colorScheme', value)
          setThemeSelected && setThemeSelected(value)
        }

        return (
          <>
            <DropdownMenu.Trigger as={Button} shape="circle" size="xs" store={dropdownMenu}>
              {schemeValue === 'dark' && <CrescentMoonIcon />}
              {schemeValue === 'light' && <SunIcon />}
            </DropdownMenu.Trigger>
            <DropdownMenu aria-label="Theme selector" gutter="md" store={dropdownMenu}>
              <DropdownMenu.Item onClick={() => handleClick('system')} store={dropdownMenu}>
                System
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => handleClick('light')} store={dropdownMenu}>
                Light
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => handleClick('dark')} store={dropdownMenu}>
                Dark
              </DropdownMenu.Item>
            </DropdownMenu>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
