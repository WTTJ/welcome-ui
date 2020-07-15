/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import 'emoji-mart/css/emoji-mart.css'
import 'easymde/dist/easymde.min.css'

import { ThemeProvider } from '../context/theme'
import { App } from '../components/App'

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <App component={Component} pageProps={pageProps} />
    </ThemeProvider>
  )
}
