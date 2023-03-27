# Welcome UI

<img src="docs/public/illustration.png" width="300" />

Welcome to the _Welcome UI library_ created by [Welcome to the jungle](https://www.welcometothejungle.com), a customizable design system with react • typescript • styled-components • styled-system and reakit.

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

## How to release

The release of the packages is automated by the CI, you just need to bump package version and push git tags to initiate the process.

### Initiating the release process from your environment

**The commands listed below will only prompt for packages to bump**. Then they will modify packages versions, commit changes and create the git tag to finally push everything to github. **No further actions are required once you have validated the packages to bump.**

#### If you just need to bump one version without bumping to a major or switching from a prerelease to stable release, run:

```bash
yarn release
```

#### To bump to a major version, run:

```bash
yarn release major
```

#### To create a new prerelease, run:

This is only used for the **first** prerelease. If you already published a v5.0.0-alpha.0 then you just need to run the first command.

```bash
yarn release --preid alpha
```

NB: you can replace alpha with any other keyword (beta, rc, ...)

#### Force publish a package

In addition to the options shown above, you can use the --force-publish option to force bumping some packages.

#### Troubleshooting

##### How to release when the publish process failed having published some packages

Re-run the failed job with ssh, then ssh into the machine and run this command:

`cd welcome-ui/packages && find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && npm publish" \;`

This will publish each packages, those who are already published will fail and be ignored by the script.

##### How to rollback a release that has been stopped before publish to npm

Revert the last commit (which should be the commit that bumps package versions):

`git revert HEAD^`

Remove the tag on github and locally.

Then apply your fixes and re-run your release command.

### About the CI

The CI will trigger on tags to build the packages and then push them to the npm registry
