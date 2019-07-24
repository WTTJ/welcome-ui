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
  { value: 'core', label: 'Default' },
  { value: 'welcomekit', label: 'WelcomeKit' },
  { value: 'welcome', label: 'WelcomeToTheJungle' }
]

export default function Wrapper({ children }) {
  const [theme, setTheme] = useState(welcomekitTheme)
  const [value, setValue] = useState(THEMES[0])

  const handleChange = e => {
    const valueObject = e.target.value
    setValue(valueObject)
    if (valueObject) {
      switch (valueObject.value) {
        case 'welcomekit':
          setTheme(welcomekitTheme)
          break
        case 'welcome':
          setTheme(welcomeTheme)
          break
        default:
          setTheme()
      }
    } else {
      setTheme()
    }
  }

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Provider>
        <div style={{ position: 'fixed', zIndex: 9999, right: '80px', top: '4px' }}>
          <Select
            name="theme"
            onChange={handleChange}
            options={THEMES}
            placeholder="Choose theme (defaults to core theme)"
            required
            size="sm"
            value={value}
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
