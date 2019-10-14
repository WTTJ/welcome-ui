import React, { useState } from 'react'
import { ComponentsProvider, theme, useMenus } from 'docz'
import { ThemeProvider } from '@xstyled/styled-components'
import { Helmet } from 'react-helmet'

import { CodeEditor, H1, H2, H3, InlineCode, Code, Props } from '../../docz'
import { createTheme } from '../theme/core'
import { GlobalStyle } from '../utils/base'
import { welcomeTheme } from '../theme/welcome'
import { welcomekitTheme } from '../theme/welcomekit'

import { Content } from './components/Content.styled'
import { Menu } from './components/Menu'
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

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => {
  const menus = useMenus()
  const [themeWUI, setThemeWUI] = useState('welcomekit')

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
          </Helmet>
          <GlobalStyle />
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
