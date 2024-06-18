import React from 'react'
import { CrescentMoonIcon, SunIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'

import { useSetThemeContext, useThemeContext } from '../../context/theme'

export const ThemeSelector = props => {
  const setTheme = useSetThemeContext()
  const theme = useThemeContext()

  return (
    <Button
      h={30}
      shape="circle"
      w={30}
      onClick={() => setTheme(theme === 'dark' ? 'core' : 'dark')}
      aria-label="Select theme"
      {...props}
    >
      {theme === 'dark' ? <CrescentMoonIcon /> : <SunIcon />}
    </Button>
  )
}
