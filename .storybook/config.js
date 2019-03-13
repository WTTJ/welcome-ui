import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme'
import GlobalStyle from '../src/utils/base'

// Create decorators
const ThemeDecorator = storyFn => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
)

// Add decorators
addDecorator(
  withInfo({
    inline: true,
    header: true,
    source: true
  })
)
addDecorator(withKnobs)
addDecorator(ThemeDecorator)

// Add parameters
addParameters({
  options: {
    brandTitle: 'WTTJ',
    isFullScreen: false,
    showPanel: true,
    theme: themes.light
  }
})
const { responsive, iphone6, iphonex, ipad } = INITIAL_VIEWPORTS
addParameters({
  viewport: {
    viewports: { responsive, iphone6, iphonex, ipad }
  }
})

// Load stories
const req = require.context('../src', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Run…
configure(loadStories, module)
