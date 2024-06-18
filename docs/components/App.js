import React, { useEffect, useState } from 'react'
import { createTheme, WuiProvider, darkTheme } from '@welcome-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { Notifications } from '@welcome-ui/toast'

import { useThemeContext } from '../context/theme'

import { Layouts } from './Layouts'
import { MDXComponents } from './Mdx'
import { Head } from './Head'
import { GlobalStyle } from './GlobalStyle'

const coreTheme = createTheme()

const getTheme = themeStorage => {
  if (themeStorage === 'dark') {
    return darkTheme
  } else {
    return coreTheme
  }
}

export function App({ component: Component, pageProps }) {
  const themeStorage = useThemeContext()
  const [globalTheme, setGlobalTheme] = useState()

  useEffect(() => {
    setGlobalTheme(getTheme(themeStorage))
  }, [themeStorage])

  return (
    <WuiProvider reactRootId="__next" theme={createTheme(globalTheme)}>
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
