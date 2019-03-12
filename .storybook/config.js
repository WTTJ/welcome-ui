import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme'

const req = require.context('../src', true, /stories\.js$/)

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
addDecorator(ThemeDecorator)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
