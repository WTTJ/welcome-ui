# Welcome UI

<img src="assets/readme.png" width="500" />

Welcome to the _Welcome UI library_ created by [Welcome to the jungle](https://www.welcometothejungle.com), a customizable design system with react • styled-components • styled-system and reakit.

Here you'll find all the core components you need to create a delightful webapp.

🌴 [Discover all the components](http://welcome-ui.com)

---

[![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE) ![Code formating](https://img.shields.io/badge/code%20formating-prettier-blue.svg) ![Code style](https://img.shields.io/badge/code%20style-styled--components-ff69b4.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-mediumspringgreen.svg)](https://github.com/WTTJ/welcome-ui/blob/master/CONTRIBUTING.md) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

---

## Install

```bash
npm install welcome-ui
```

or

```bash
yarn add welcome-ui
```

## Import library & Theme

Getting started

```js
import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { createTheme, GlobalStyle } from '@welcome-ui/core'
import { Text } from '@welcome-ui/text'

const theme = createTheme()

export default function App() {
  // Wrap your component with ThemeProvider
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Text variant="h1">Welcome!</Text>
        <Text>Here is how you can start with welcome-ui :)</Text>
      </>
    </ThemeProvider>
  )
}
```
