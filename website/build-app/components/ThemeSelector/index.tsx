import { Button } from '@welcome-ui/button'
import { CrescentMoonIcon, SunIcon } from '@welcome-ui/icons'
import React from 'react'

export const ThemeSelector = () => {
  return (
    <Button shape="circle" size="xs">
      <CrescentMoonIcon />
      <SunIcon />
    </Button>
  )
}
