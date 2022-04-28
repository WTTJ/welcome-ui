
import React, { useEffect, useState } from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { welcomeTheme } from '@welcome-ui/themes.welcome'
import { darkTheme } from '@welcome-ui/themes.dark'

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
  } else {
    return coreTheme
  }
}

export function App({ component: Component, pageProps }) {
  const themeStorage = useThemeContext()
  const initialTheme = welcomeTheme
  const [allTheme, setAllTheme] = useState(initialTheme)

  useEffect(() => {
    setAllTheme(getTheme(themeStorage))
  }, [themeStorage])

  return (
    <WuiProvider reactRootId="__next" theme={createTheme(allTheme)}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle />
        <Head />
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </MDXProvider>
    </WuiProvider>
  )
}
