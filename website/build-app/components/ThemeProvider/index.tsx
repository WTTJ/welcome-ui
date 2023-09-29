'use client'
import { WuiProvider, WuiProviderProps, createTheme } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import * as React from 'react'

interface ThemeProviderProps {
  children: WuiProviderProps['children']
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = React.useMemo(() => createTheme(welcomeTheme), [])

  return (
    <WuiProvider theme={theme} useReset>
      {children}
    </WuiProvider>
  )
}
