import React from 'react'
import { RenderOptions, render as rtlRender } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import { createTheme } from '../src/theme'

import { WuiProvider } from '@/WuiProvider'

type ProviderProps = {
  children?: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const theme = createTheme()

  return (
    <WuiProvider hasGlobalStyle theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </WuiProvider>
  )
}

type RenderResult = ReturnType<typeof rtlRender> & { user: UserEvent }

const customRender = (ui: JSX.Element, options?: RenderOptions): RenderResult => {
  const renderResult = rtlRender(ui, { wrapper: Provider, ...options })

  return {
    user: userEvent.setup(),
    ...renderResult,
  }
}

// override render method
export { customRender as render }
