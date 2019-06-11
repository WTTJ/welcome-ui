/* eslint-disable react/prop-types */
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import StaticRouter from 'react-router-dom/StaticRouter'
import 'jest-dom/extend-expect'
import 'jest-styled-components'

import { createTheme } from '../theme/core'
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
