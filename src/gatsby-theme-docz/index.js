/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react'
import { ComponentsProvider, theme, useMenus } from 'docz'
import { Helmet } from 'react-helmet'

import { createTheme, WuiProvider } from '../../../packages/Core/index'
import { darkTheme } from '../../../packages/Themes/Dark'
import { welcomeTheme } from '../../../packages/Themes/Welcome'
import { Code, CodeEditor, H1, H2, H3, InlineCode, Props } from '../../../docz/index'

import { Content, ContentWrapper } from './components/Content.styled'
import { Menu } from './components/Menu'
import { MobileMenu } from './components/MobileMenu'
import { Page } from './components/Page'
import { Footer } from './components/Footer'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  pre: Code,
  inlineCode: InlineCode,
  playground: CodeEditor,
  props: Props
}

function doczThemeLight(colors) {
  return {
    docz: {
      page: {
        backgroundColor: colors.nude[100]
      },
      navigation: {
        color: colors.light[900]
      },
      navigationmobile: {
        color: colors.dark[900]
      },
      menu: {
        'background-color': colors.dark[700]
      },
      github: {
        'background-color': colors.primary[500],
        color: colors.light[900],
        '&:hover, &:focus': {
          'background-color': colors.primary[200]
        }
      }
    }
  }
}

function doczThemeWelcome(colors) {
  return {
    docz: {
      page: {
        backgroundColor: colors.nude[100]
      },
      navigation: {
        color: colors.light[900]
      },
      navigationmobile: {
        color: colors.dark[900]
      },
      menu: {
        'background-color': colors.dark[700]
      },
      github: {
        'background-color': colors.primary[500],
        color: colors.dark[900],
        '&:hover, &:focus': {
          'background-color': colors.primary[200]
        }
      }
    }
  }
}

function doczThemeDark(colors) {
  return {
    docz: {
      page: {
        backgroundColor: colors.light[500],
        color: colors.dark[900]
      },
      navigation: {
        color: colors.dark[900]
      },
      navigationmobile: {
        color: colors.dark[900]
      },
      menu: {
        'background-color': colors.light[900]
      },
      github: {
        'background-color': colors.primary[500],
        color: colors.dark[900],
        '&:hover, &:focus': {
          'background-color': colors.primary[200]
        }
      }
    }
  }
}

const getThemeOptions = name => {
  let theming

  switch (name) {
    case 'welcome':
      theming = createTheme(welcomeTheme)
      break
    case 'dark':
      theming = createTheme(darkTheme)
      break
    default:
      theming = createTheme()
  }

  if (name === 'dark') {
    return { ...theming, ...doczThemeDark(theming.colors) }
  } else if (name === 'welcome') {
    return { ...theming, ...doczThemeWelcome(theming.colors) }
  } else {
    return { ...theming, ...doczThemeLight(theming.colors) }
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
  const [themeWUI, setThemeWUI] = useStateWithLocalStorage('welcome')

  return (
    <WuiProvider theme={getThemeOptions(themeWUI)}>
      <ComponentsProvider components={components}>
        <Page>
          <Helmet>
            <link
              href="https://cdn.welcomehome.io/production/assets/favicon.png"
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
          <ContentWrapper>
            <Content>
              {children}
              <Footer themeWUI={themeWUI} />
            </Content>
          </ContentWrapper>
        </Page>
      </ComponentsProvider>
    </WuiProvider>
  )
}

export default theme()(Theme)
