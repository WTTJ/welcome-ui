import React from 'react'
import { RenderOptions, render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '@xstyled/styled-components'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import { createTheme } from '../packages/Core/src/theme/core'
export const theme = createTheme()

type ProviderProps = {
  children?: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
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

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

Range.prototype.getBoundingClientRect = () => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: () => '',
})

Range.prototype.getClientRects = () => ({
  item: () => null,
  length: 0,
  [Symbol.iterator]: jest.fn(),
})
