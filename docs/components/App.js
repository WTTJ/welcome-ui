/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { darkTheme } from '@welcome-ui/themes.dark'
import merge from 'lodash.merge'

import { useThemeContext } from '../context/theme'

import { Layout } from './Layout'
import { MDXComponents } from './MDXComponents'
import { Head } from './Head'

const baseDocTheme = ({ colors }) => ({
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
      item: {
        color: colors.light[700],
        '&:hover': {
          color: colors.light[900]
        },
        "&[aria-current='page']": {
          color: colors.light[900],
          backgroundColor: colors.dark[500]
        }
      },
      main: { color: colors.light[900] }
    },
    navigationMobile: {
      item: {
        color: colors.dark[700],
        '&:hover': {
          color: colors.dark[900]
        },
        "&[aria-current='page']": {
          color: colors.dark[900],
          backgroundColor: colors.light[800]
        }
      },
      main: { color: colors.dark[900] }
    }
  }
})

const darkDocTheme = ({ colors }) => ({
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
      item: {
        color: colors.dark[700],
        '&:hover': {
          color: colors.dark[900]
        },
        "&[aria-current='page']": {
          color: colors.dark[900],
          backgroundColor: colors.light[700]
        }
      },
      main: { color: colors.dark[900] }
    },
    navigationMobile: {
      item: {
        color: colors.dark[700],
        '&:hover': {
          color: colors.dark[900]
        },
        "&[aria-current='page']": {
          color: colors.dark[900],
          backgroundColor: colors.light[700]
        }
      },
      main: { color: colors.dark[900] }
    }
  }
})

const coreTheme = createTheme()

const getTheme = themeStorage => {
  if (themeStorage === 'welcome') {
    return merge(welcomeTheme, baseDocTheme(welcomeTheme))
  } else if (themeStorage === 'dark') {
    return merge(darkTheme, darkDocTheme(darkTheme))
  } else {
    return baseDocTheme(coreTheme)
  }
}

export const App = ({ component: Component, pageProps }) => {
  const themeStorage = useThemeContext()
  const initialTheme = merge(welcomeTheme, baseDocTheme(welcomeTheme))
  const [allTheme, setAllTheme] = useState(initialTheme)

  useEffect(() => {
    setAllTheme(getTheme(themeStorage))
  }, [themeStorage])

  return (
    <WuiProvider reactRootId="__next" theme={createTheme(allTheme)}>
      <MDXProvider components={MDXComponents}>
        <Head />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </WuiProvider>
  )
}
