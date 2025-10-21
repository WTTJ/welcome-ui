import sdk from '@stackblitz/sdk'

const getIndexHtml = (name: string) => `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name} - Playground [Welcome UI]</title>
    <link rel="stylesheet" href="/global.css" />
    <style>
      body {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>`

const indexTsx = `import * as React from 'react'
import {createRoot} from 'react-dom/client';

import Demo from './demo'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Demo />
  </React.StrictMode>
)`

const globalCss = `@import 'tailwindcss';
@import 'welcome-ui/theme.css';
/* Temporary import, we should create a welcome-ui base css */
@import 'welcome-ui/Accordion.css';
@import 'welcome-ui/Alert.css';
@import 'welcome-ui/AspectRatio.css';
@import 'welcome-ui/Avatar.css';
@import 'welcome-ui/Badge.css';
@import 'welcome-ui/Breadcrumb.css';
@import 'welcome-ui/Button.css';
@import 'welcome-ui/ButtonGroup.css';
@import 'welcome-ui/Card.css';
@import 'welcome-ui/Checkbox.css';
@import 'welcome-ui/CloseButton.css';
@import 'welcome-ui/CustomPopper.css';
@import 'welcome-ui/DatePicker.css';
@import 'welcome-ui/Drawer.css';
@import 'welcome-ui/DropdownMenu.css';
@import 'welcome-ui/Field.css';
@import 'welcome-ui/FieldGroup.css';
@import 'welcome-ui/FileDrop.css';
@import 'welcome-ui/FileUpload.css';
@import 'welcome-ui/Hint.css';
@import 'welcome-ui/Icon.css';
@import 'welcome-ui/InputText.css';
@import 'welcome-ui/Label.css';
@import 'welcome-ui/Link.css';
@import 'welcome-ui/Loader.css';
@import 'welcome-ui/Logo.css';
@import 'welcome-ui/Modal.css';
@import 'welcome-ui/Pagination.css';
@import 'welcome-ui/Popover.css';
@import 'welcome-ui/Radio.css';
@import 'welcome-ui/RadioGroup.css';
@import 'welcome-ui/RadioTab.css';
@import 'welcome-ui/Search.css';
@import 'welcome-ui/Select.css';
@import 'welcome-ui/Slider.css';
@import 'welcome-ui/Swiper.css';
@import 'welcome-ui/Table.css';
@import 'welcome-ui/Tabs.css';
@import 'welcome-ui/Tag.css';
@import 'welcome-ui/Text.css';
@import 'welcome-ui/Textarea.css';
@import 'welcome-ui/Toast.css';
@import 'welcome-ui/Toggle.css';
@import 'welcome-ui/Tooltip.css';
@import 'welcome-ui/VariantIcon.css';
@import 'welcome-ui/utils.css';`

const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()]
})`

const getPackageJson = () => `{
  "name": "welcome-ui-playground",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "welcome-ui": "latest",
    "tailwindcss": "4.1.14",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.14",
    "@types/react": "19.0.0",
    "@types/react-dom": "19.0.0",
    "@vitejs/plugin-react": "5.0.0",
    "typescript": "5.9.3",
    "vite": "7.1.0"
  }
}`

const tsConfig = `{
  "compilerOptions": {
    "jsx": "react",
    "moduleResolution": "bundler"
  }
}`

export const openStackBlitz = ({ code, name }: { code: string; name: string }) => {
  const packageJson = getPackageJson()
  const indexHtml = getIndexHtml(name)

  sdk.openProject(
    {
      files: {
        'demo.tsx': code,
        'global.css': globalCss,
        'index.html': indexHtml,
        'index.tsx': indexTsx,
        'package.json': packageJson,
        'tsconfig.json': tsConfig,
        'vite.config.mjs': viteConfig,
      },
      settings: {
        compile: {
          action: 'npm install && npm run dev',
          clearConsole: false,
          trigger: 'auto',
        },
      },
      template: 'node',
      title: `${name} - Playground [Welcome UI]`,
    },
    {
      openFile: ['demo.tsx'],
    }
  )
}
