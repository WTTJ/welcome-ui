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

const coreTheme = createTheme()

const getTheme = themeStorage => {
  if (themeStorage === 'welcome') {
    return merge(welcomeTheme, baseDocTheme(welcomeTheme.colors))
  } else if (themeStorage === 'dark') {
    return merge(darkTheme, darkDocTheme(darkTheme.colors))
  } else {
    return baseDocTheme(coreTheme.colors)
  }
}

export const App = ({ component: Component, pageProps }) => {
  const themeStorage = useThemeContext()
  const initialTheme = merge(welcomeTheme, baseDocTheme(welcomeTheme.colors))
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
