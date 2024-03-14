'use client'
import { createTheme, WuiProvider, WuiProviderProps } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import * as React from 'react'

interface ThemeProviderProps {
  children: WuiProviderProps['children']
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = React.useMemo(() => createTheme(welcomeTheme), [])

  return (
    <WuiProvider theme={theme} useReset>
      {children}
    </WuiProvider>
  )
}
