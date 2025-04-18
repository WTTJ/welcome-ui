import type { RenderOptions } from '@testing-library/react'
import { render as rtlRender } from '@testing-library/react'
import type { UserEvent } from '@testing-library/user-event'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { WuiProvider } from '@/WuiProvider'

import { createTheme } from '../src/theme'

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
