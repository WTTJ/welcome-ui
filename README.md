# Welcome UI

[![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE) [![npm package](https://img.shields.io/npm/v/welcome-ui/latest.svg)](https://www.npmjs.com/package/welcome-ui) [![downloads npm](https://img.shields.io/npm/dw/welcome-ui.svg)](https://www.npmjs.com/package/welcome-ui) ![Code formating](https://img.shields.io/badge/code%20formating-prettier-blue.svg) ![Code style](https://img.shields.io/badge/code%20style-styled--components-ff69b4.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-mediumspringgreen.svg)](https://github.com/WTTJ/welcome-ui/blob/master/CONTRIBUTING.md) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Welcome to the _Welcome UI library_ create by [Welcome to the jungle](http://www.welcometothejungle.co) with react and styled components 💅

Here you'll find all the core components you need to create a delightful webapp.

[🌴 Discover all the components](https://welcome-ui.surge.sh)

## Install

```bash
npm install welcome-ui
```

or

```bash
yarn add welcome-ui
```

## Import library & Theme

You can find all the theme properties [here](https://welcome-ui.surge.sh/themes).

```js
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createTheme, GlobalStyle } from 'welcome-ui'

const options = {
  defaultFontFamily: 'Helvetica',
  headingFontFamily: 'Georgia',
  colors: {
    primary: {
      500: '#FF0000'
    },
    secondary: {
      500: '#00FF00'
    }
  }
}

const theme = createTheme(options)

export default function Root() {
  // Wrap your component with ThemeProvider
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>Welcome!</div>
      </>
    </ThemeProvider>
  )
}
```

