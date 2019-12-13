import React, { useState } from 'react'
import { ComponentsProvider, theme, useMenus } from 'docz'
import { ThemeProvider } from '@xstyled/styled-components'
import { Helmet } from 'react-helmet'

import { createTheme } from '../../packages/Core/theme/core'
import { GlobalStyle } from '../../packages/Core/utils/base'
import { welcomeTheme } from '../../packages/Core/theme/welcome'
import { welcomekitTheme } from '../../packages/Core/theme/welcomekit'
import { Code, CodeEditor, H1, H2, H3, InlineCode, Props } from '../../docz'

import { Content } from './components/Content.styled'
import { Menu } from './components/Menu'
import { MobileMenu } from './components/MobileMenu'
import { Page } from './components/Page'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  pre: Code,
  inlineCode: InlineCode,
  playground: CodeEditor,
  props: Props
}

const themeOptions = name => {
  switch (name) {
    case 'welcomekit':
      return welcomekitTheme
    case 'welcome':
      return welcomeTheme
    default:
      return ''
  }
}

const useStateWithLocalStorage = defaultValue => {
  const withWindow = typeof window !== 'undefined'
  const defaultOrSaved = (withWindow && localStorage.getItem('themeWUI')) || defaultValue
  const [themeWUI, setThemeWUI] = useState(defaultOrSaved)
  const setAndPersistThemeWUI = val => {
    setThemeWUI(val)
    withWindow && localStorage.setItem('themeWUI', val)
  }
  return [themeWUI, setAndPersistThemeWUI]
}

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => {
  const menus = useMenus()
  const [themeWUI, setThemeWUI] = useStateWithLocalStorage('welcomekit')

  return (
    <ThemeProvider theme={createTheme(themeOptions(themeWUI))}>
      <ComponentsProvider components={components}>
        <Page>
          <Helmet>
            <link
              href="https://wh-front-production.s3-eu-west-1.amazonaws.com/production/home/assets/favicon.png"
              rel="shortcut icon"
              type="image/png"
            />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
              rel="stylesheet"
            />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="@wttj_fr" name="twitter:site" />
            <meta content="@wttj_fr" name="twitter:create" />
            <meta
              content="Welcome UI - Customizable design system with react"
              property="twitter:title"
            />
            <meta
              content="Here you'll find all the core components you need to create a delightful webapp. Customizable design system from Welcome to the jungle with react • styled-components • styled-system and reakit."
              property="twitter:description"
            />
            <meta content="http://welcome-ui.com" property="og:url" />
            <meta
              content="Welcome UI - Customizable design system with react"
              property="og:title"
            />
            <meta
              content="Here you'll find all the core components you need to create a delightful webapp. Customizable design system from Welcome to the jungle with react • styled-components • styled-system and reakit."
              property="og:description"
            />
            <meta
              content="https://cdn.welcometothejungle.co/images/welcome-ui-og-image.png"
              property="og:image"
            />
          </Helmet>
          <GlobalStyle />
          <MobileMenu
            display={{ lg: 'none' }}
            items={menus}
            theme={{ setTheme: setThemeWUI, value: themeWUI }}
          />
          <Menu
            display={{ xs: 'none', lg: 'flex' }}
            items={menus}
            theme={{ setTheme: setThemeWUI, value: themeWUI }}
          />
          <Content>{children}</Content>
        </Page>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export default theme()(Theme)
