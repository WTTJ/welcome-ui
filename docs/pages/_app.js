/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'

import { ThemeProvider } from '../context/theme'
import { App } from '../components/App'

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <App component={Component} pageProps={pageProps} />
    </ThemeProvider>
  )
}
