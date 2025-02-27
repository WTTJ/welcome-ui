# Welcome UI

![Welcome UI Logo](https://github.com/user-attachments/assets/e7df47fd-e6c8-462a-ac09-d052d67555bc)

Welcome to the _Welcome UI library_ created by [Welcome to the jungle](https://www.welcometothejungle.com), a customizable design system with react • typescript • styled-components • styled-system and ariakit.

Here you'll find all the core components you need to create a delightful webapp.

🌴 [Discover all the components](https://welcome-ui.com)

---

[![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/tree/main/LICENSE) ![Code formating](https://img.shields.io/badge/code%20formating-prettier-blue.svg) ![Code style](https://img.shields.io/badge/code%20style-styled--components-ff69b4.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-mediumspringgreen.svg)](https://github.com/WTTJ/welcome-ui/tree/main/CONTRIBUTING.mdx) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

---

## Installation

1 - Install the `welcome-ui` package and **peer dependencies** listed below:

```bash
yarn add welcome-ui @xstyled/styled-components@^3.7.3 react@^18.0.0 styled-components@^5.3.9
```

## Import library & Theme

Getting started

```js
import React from 'react'
import { createTheme } from 'welcome-ui/theme'
import { WuiProvider } from 'welcome-ui/WuiProvider'
import { Button } from 'welcome-ui/Button'

// Add theme options (if you want)
const options = {
  defaultFontFamily: 'Helvetica',
  headingFontFamily: 'Georgia',
  colors: {
    primary: {
      50: '#124C80',
    },
    green: {
      50: '#32CD32',
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

1. Install

```bash
yarn
```

2. Start documentation website

```bash
yarn start
```

3. and go to http://localhost:3020

## How to release

The release of the library is automated by the CI, you just need to bump package version and push git tags to initiate the process.

### Release process

**The commands listed below will only prompt for library to bump**. Then they will modify package version, commit changes and create the git tag to finally push everything to github. **No further actions are required once you have validated the packages to bump.**

#### How to release

##### Production

(ex: **7.1.0**):

```bash
yarn release
```

##### Alpha

(ex: **7.1.0-alpha.0**)

Generate an alpha release for broader team testing:

```bash
yarn release:alpha
```

##### Development

(ex: **dev.1738060597**)

Create a development release based on the current timestamp for quick testing of pre-release features:

```bash
yarn release:dev
```

### About the CI

The CI will trigger on tags to build the packages and then push them to the npm registry
