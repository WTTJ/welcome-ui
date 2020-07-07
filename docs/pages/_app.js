/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import 'emoji-mart/css/emoji-mart.css'
import 'easymde/dist/easymde.min.css'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'

import { Layout } from '../components/Layout'
import { MDXComponents } from '../components/MDXComponents'

export default ({ Component, pageProps }) => {
  const theme = createTheme(welcomeTheme)

  return (
    <WuiProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Head>
          <title>Welcome UI</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </WuiProvider>
  )
}
