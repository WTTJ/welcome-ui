import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { StaticRouter } from 'react-router-dom/server'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { createTheme } from '../packages/Core/theme/core'
const theme = createTheme()

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StaticRouter context={{}}>{children}</StaticRouter>
    </ThemeProvider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

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
})
Range.prototype.getClientRects = () => ({
  item: () => null,
  length: 0,
  [Symbol.iterator]: jest.fn(),
})
