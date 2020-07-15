/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { darkTheme } from '@welcome-ui/themes.dark'
import merge from 'lodash.merge'

import { useThemeContext } from '../context/theme'

import { Layout } from './Layout'
import { MDXComponents } from './MDXComponents'

const baseDocTheme = colors => ({
  docs: {
    page: {
      backgroundColor: colors.nude[100]
    },
    code: {
      background: colors.dark[700]
    },
    header: {
      backgroundColor: colors.dark[700]
    },
    navigation: {
      color: colors.light[900]
    },
    navigationMobile: {
      color: colors.dark[900]
    }
  }
})

const darkDocTheme = colors => ({
  docs: {
    page: {
      backgroundColor: colors.light[500],
      color: colors.dark[900]
    },
    code: {
      background: colors.light[900]
    },
    header: {
      backgroundColor: colors.light[900]
    },
    navigation: {
      color: colors.dark[900]
    },
    navigationMobile: {
      color: colors.dark[900]
    }
  }
})

const initialTheme = createTheme()

export const App = ({ component: Component, pageProps }) => {
  const themeStorage = useThemeContext()
  const [allTheme, setAllTheme] = useState()

  useEffect(() => {
    const getTheme = themeStorage => {
      if (themeStorage === 'welcome') {
        return merge(welcomeTheme, baseDocTheme(welcomeTheme.colors))
      } else if (themeStorage === 'dark') {
        return merge(darkTheme, darkDocTheme(darkTheme.colors))
      } else {
        return baseDocTheme(initialTheme.colors)
      }
    }

    setAllTheme(getTheme(themeStorage))
  }, [themeStorage])

  return (
    <WuiProvider
      theme={createTheme(merge(allTheme || welcomeTheme, baseDocTheme(initialTheme.colors)))}
    >
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
