import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { Provider } from 'reakit'

import { welcomekitTheme } from './src/theme/welcomekit'
import { createTheme } from './src/theme/core'
import { GlobalStyle } from './src/utils/'

const theme = createTheme(welcomekitTheme)

export default function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyle />
        {children}
      </Provider>
    </ThemeProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node
}
