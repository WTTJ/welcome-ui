import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@xstyled/styled-components'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import { createTheme } from '../packages/Core/theme/core'
const theme = createTheme()

type WrapperProps = { children?: React.ReactNode }

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  )
}

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

// https://stackoverflow.com/questions/42099385/jest-enzyme-jsdom-document-body-createtextrange-is-not-a-function
global.document.createRange = () => ({
  setEnd: () => {
    return {}
  },
  setStart: () => {
    return {}
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  getBoundingClientRect: () => ({
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    right: 100,
    bottom: 100,
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  getClientRects: () => ({ width: 100, height: 100, top: 0, left: 0, right: 100, bottom: 100 }),
})
