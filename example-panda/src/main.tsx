import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'

import { App } from './App.tsx'

import './index.css'

const theme = createTheme(welcomeTheme)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WuiProvider theme={theme}>
      <App />
    </WuiProvider>
  </React.StrictMode>
)
