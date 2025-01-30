import React from 'react'
import { RenderOptions, render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '@xstyled/styled-components'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import '@testing-library/jest-dom'
import 'jest-styled-components'

import { createTheme } from '../src/theme'

type ProviderProps = {
  children?: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
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
