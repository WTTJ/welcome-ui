/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { Provider } from 'reakit'

import { createTheme } from '../../../src/theme/core'
import { GlobalStyle } from '../../../src/utils/base'
import { ThemeContext } from '../../../docz/themeContext'
import { welcomekitTheme } from '../../../src/theme/welcomekit'
import { welcomeTheme } from '../../../src/theme/welcome'
import { THEMES } from '../../../docz/themeValues'

export const Wrapper = ({ children }) => {
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
        case 'chore':
          setTheme()
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
        <GlobalStyle />
        <ThemeContext.Provider value={{ handleChange, value, theme }}>
          {children}
        </ThemeContext.Provider>
      </Provider>
    </ThemeProvider>
  )
}

export default Wrapper
