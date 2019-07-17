import React, { useState } from 'react'
import { node } from 'prop-types'
import { ThemeProvider } from '@xstyled/styled-components'
import { Provider } from 'reakit'

import { Select } from './src'
import { welcomekitTheme } from './src/theme/welcomekit'
import { welcomeTheme } from './src/theme/welcome'
import { createTheme } from './src/theme/core'
import { GlobalStyle } from './src/utils/'

const THEMES = [
  { value: 'welcomekit', label: 'WelcomeKit' },
  { value: 'welcome', label: 'WelcomeToTheJungle' },
  { value: 'core', label: 'Core' }
]

export default function Wrapper({ children }) {
  const [theme, setTheme] = useState(welcomekitTheme)

  const chooseTheme = e => {
    const value = e.target.value.value
    // console.log(value)
    switch (value) {
      case 'welcomekit':
        setTheme(welcomekitTheme)
        break
      case 'welcome':
        setTheme(welcomeTheme)
        break
      default:
        setTheme()
    }
  }

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Provider>
        <div style={{ position: 'fixed', zIndex: 9999, right: '80px', top: '4px' }}>
          <Select
            name="theme"
            onChange={chooseTheme}
            options={THEMES}
            size="sm"
            value={THEMES[0]}
          />
        </div>
        <GlobalStyle />
        {children}
      </Provider>
    </ThemeProvider>
  )
}

Wrapper.propTypes = {
  children: node
}
