# Welcome UI

<img src="docs/public/illustration.png" width="300" />

Welcome to the _Welcome UI library_ created by [Welcome to the jungle](https://www.welcometothejungle.com), a customizable design system with react • styled-components • styled-system and reakit.

Here you'll find all the core components you need to create a delightful webapp.

🌴 [Discover all the components](https://welcome-ui.com)

---

[![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE) ![Code formating](https://img.shields.io/badge/code%20formating-prettier-blue.svg) ![Code style](https://img.shields.io/badge/code%20style-styled--components-ff69b4.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-mediumspringgreen.svg)](https://github.com/WTTJ/welcome-ui/blob/master/CONTRIBUTING.mdx) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

---

## Installation

1 - Install the **peer dependencies** listed below:

```bash
yarn add @xstyled/styled-components react styled-components
```

2 - Install the the **core** component and any other components you need for your webapp e.g. if you need just a button…

```bash
yarn add @welcome-ui/core @welcome-ui/button
```

## Import library & Theme

Getting started

```js
import React from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { Button } from '@welcome-ui/button'

// Add theme options (if you want)
const options = {
  defaultFontFamily: 'Helvetica',
  headingFontFamily: 'Georgia',
  colors: {
    primary: {
      500: '#124C80',
    },
    success: {
      500: '#32CD32',
    },
  },
}

// Create your theme
const theme = createTheme(options)
export default function Root() {
  return (
    // Wrap your components with <WuiProvider /> with your theme
    <WuiProvider
      theme={theme}
      // Will inject a CSS reset with normalizer
      hasGlobalStyle
      // Will show the focus ring on keyboard navigation only
      shouldHideFocusRingOnClick
    >
      <Button>Welcome!</Button>
    </WuiProvider>
  )
}
```

## Develop on local

1. First install and build the packages _(only the first time)_

```bash
yarn first:install
```

2. Start documentation website

```bash
yarn start
```

3. Start a watch on all packages to rebuild them easily

```bash
yarn watch
```

4. and go to https://localhost:3020

## Add some new icons

Follow the steps of [icons/README.md](icons/README.md)
