# Getting Started

## Installation

### 1. Install Welcome UI

Install the `@welcome-ui/core` component and **peer dependencies** listed below:

```bash
yarn add @welcome-ui/core @xstyled/styled-components react styled-components
```

### 2. Install UI components

Install any other components you need for your webapp e.g. if you need just a button…

```bash
yarn add @welcome-ui/button
```

### 3. Set up the Provider

Use the `<WuiProvider />` at the root of your application to set the theme and styled components for your project

```jsx live=false
import React from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { Button } from '@welcome-ui/button'

const theme = createTheme()

export default function Root() {
  return (
    <WuiProvider theme={theme}>
      <Button variant="secondary">Welcome!</Button>
    </WuiProvider>
  )
}
```

<!-- todo ### WuiProvider Props

<props
  propTypes={{
    children: {
      description: '',
      required: true,
      type: { name: 'node' },
    },
    hasGlobalStyle: {
      defaultValue: { value: 'true', computed: false },
      description: 'Will inject our global style with normalize and fonts',
      required: false,
      type: { name: 'bool' },
    },
    reactRootId: {
      defaultValue: { value: 'root' },
      description: 'Id of your react root',
      required: false,
      type: { name: 'string' },
    },
    shouldHideFocusRingOnClick: {
      defaultValue: { value: 'true', computed: false },
      description:
        'It hides the focus ring on mouse move, click or on keydown. (explanation below)',
      required: false,
      type: { name: 'bool' },
    },
    theme: {
      description: 'Your custom theme from createTheme()',
      required: true,
      type: { name: 'object' },
    },
    useReset: {
      defaultValue: { value: 'false', computed: false },
      description:
        'Will inject our global style with https://meyerweb.com/eric/tools/css/reset/ reset.',
      required: false,
      type: { name: 'bool' },
    },
  }}
/>
-->

## Hide Focus Ring

WuiProvider takes a `shouldHideFocusRingOnClick` prop which defaults to `true`. It hides the focus ring on mouse move, click or on keydown.

It only adds styles to remove the outline on focus. If you need to remove another css property, you have to write your own styles using the data-attribute `hideFocusRingsDataAttribute` exported from `@welcome-ui/utils`.

⚠️ Troubleshooting

If it doesn't work for you, check that the id of your react root is set to `root`. If you have another id (nextjs uses `__next`), just use the `reactRootId` prop on `WuiProvider` to change it:

```
<WuiProvider
  theme={theme}
  hasGlobalStyle
  reactRootId="__next"
>
  {your app}
</WuiProvider>
```

## Typescript

Install needed types:

```bash
yarn add @types/react-dom @types/styled-components
```

In order to get your theme object typed with our theme, you have to override the default theme by adding this in a "styled.d.ts" file at the root of your project:

```
// styled.d.ts
import 'styled-components'
import '@xstyled/styled-components'
import { WuiTheme } from '@welcome-ui/core'

interface AppTheme extends WuiTheme {
  // customize your theme
}

declare module '@xstyled/styled-components' {
  export interface Theme extends AppTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
```

<pagination />
