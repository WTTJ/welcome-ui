/* eslint-disable react/prop-types */
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@xstyled/styled-components'
import { StaticRouter } from 'react-router-dom'
import 'jest-dom/extend-expect'
import 'jest-styled-components'

import { createTheme } from '../../packages/Core/theme/core'
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

// https://stackoverflow.com/questions/42099385/jest-enzyme-jsdom-document-body-createtextrange-is-not-a-function
global.document.createRange = () => ({
  setEnd: () => {},
  setStart: () => {},
  getBoundingClientRect: () => ({
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    right: 100,
    bottom: 100
  }),
  getClientRects: () => ({ width: 100, height: 100, top: 0, left: 0, right: 100, bottom: 100 })
})
