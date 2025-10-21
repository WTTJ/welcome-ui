# Welcome UI

![Welcome UI Logo](https://github.com/user-attachments/assets/e7df47fd-e6c8-462a-ac09-d052d67555bc)

Welcome to the _Welcome UI library_ created by [Welcome to the jungle](https://www.welcometothejungle.com), a customizable design system with react, typescript, tailwindcss and ariakit.

Here you'll find all the core components you need to create a delightful webapp.

🌴 [Discover all the components](https://welcome-ui.com)

---

## Installation

1 - Install the `welcome-ui` package and **peer dependencies** listed below:

```bash
yarn add welcome-ui tailwindcss react@^19.0.0
```

```bash
yarn add postcss --dev
```

2 - Add dependencies for vite project

```bash
yarn add @tailwindcss/vite --dev
```

3 - Add on your vite config tailwindcss plugin

```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

## Import library & Theme

On your theme or global css import:

- TailwindCSS
- Welcome UI Theme
- Welcome UI components style

```css
@import 'tailwindcss';

@import 'welcome-ui/theme.css';

@import 'welcome-ui/Accordion.css';
@import 'welcome-ui/Alert.css';
@import 'welcome-ui-new/***other-components-you-need***.css';
...
```

## Enjoy! 🌞

```jsx
import { Button } from 'welcome-ui/Button'

return <Button>Ok let's go</Button>
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
