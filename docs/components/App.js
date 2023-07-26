import React, { useEffect, useState } from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { darkTheme } from '@welcome-ui/themes.dark'
import { welcomeDarkTheme } from '@welcome-ui/themes.welcome-dark'
import { Notifications } from '@welcome-ui/toast'

import { useThemeContext } from '../context/theme'

import { Layouts } from './Layouts'
import { MDXComponents } from './Mdx'
import { Head } from './Head'
import { GlobalStyle } from './GlobalStyle'

const coreTheme = createTheme()

const getTheme = themeStorage => {
  if (themeStorage === 'welcome') {
    return welcomeTheme
  } else if (themeStorage === 'dark') {
    return darkTheme
  } else if (themeStorage === 'welcomeDark') {
    return welcomeDarkTheme
  } else {
    return coreTheme
  }
}

export function App({ component: Component, pageProps }) {
  const themeStorage = useThemeContext()
  const initialTheme = welcomeTheme
  const [globalTheme, setGlobalTheme] = useState(initialTheme)

  useEffect(() => {
    setGlobalTheme(getTheme(themeStorage))
  }, [themeStorage])

  return (
    <WuiProvider
      reactRootId="__next"
      theme={createTheme({ fontsUrl: 'https://cdn.welcometothejungle.com', ...globalTheme })}
    >
      <MDXProvider components={MDXComponents}>
        <GlobalStyle />
        <Head />
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
        <Notifications />
      </MDXProvider>
    </WuiProvider>
  )
}
