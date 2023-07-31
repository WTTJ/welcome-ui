/* eslint-disable react/display-name */
import React from 'react'
import { Provider } from 'reakit'

import { ThemeProvider } from '../context/theme'
import { App } from '../components/App'

require('@welcome-ui/icons.font/fonts/welcome-icon-font.css')

const NextApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Provider>
        <App component={Component} pageProps={pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default NextApp
