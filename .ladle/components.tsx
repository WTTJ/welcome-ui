import React from 'react'
import { WuiProvider, createTheme } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'

import './style.css'
import '@welcome-ui/core/dist/index.css'

const theme = createTheme(welcomeTheme)

type ProviderProps = { children: JSX.Element }

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <WuiProvider theme={theme} usePanda>
      {children}
    </WuiProvider>
  )
}
