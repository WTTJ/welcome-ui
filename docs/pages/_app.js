/* eslint-disable react/display-name */
import '../styles/index.css'
import React from 'react'

import { ThemeProvider } from '../context/theme'
import { App } from '../components/App'

require('@welcome-ui/icons.font/fonts/welcome-icon-font.css')

const NextApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <App component={Component} pageProps={pageProps} />
    </ThemeProvider>
  )
}

export default NextApp
