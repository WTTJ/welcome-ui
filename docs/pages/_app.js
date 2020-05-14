/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { MDXProvider } from '@mdx-js/react'

import { MDXComponents } from '../components/MDXComponents'
import { Layout } from '../layout'

export default ({ Component, pageProps }) => {
  const theme = createTheme(welcomeTheme)

  return (
    <WuiProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </WuiProvider>
  )
}
