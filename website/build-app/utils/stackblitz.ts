import sdk from '@stackblitz/sdk'

const getIndexHtml = (name: string) => `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name} - Playground [Welcome UI]</title>
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
import * as ReactDOM from 'react-dom'
import { createTheme } from 'welcome-ui/theme';
import { WuiProvider } from 'welcome-ui/WuiProvider';

import Demo from './demo'

const theme = createTheme()

ReactDOM.render(
  <React.StrictMode>
    <WuiProvider theme={theme}>
      <Demo />
    </WuiProvider>
  </React.StrictMode>,
  document.getElementById('root')
)`

const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
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
    "@xstyled/styled-components": "^3.7.3",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "styled-components": "^5.3.9"
  },
  "devDependencies": {
    "@types/react": "18.0.25",
    "@types/react-dom": "18.0.11",
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "5.0.2",
    "vite": "^5.2.12"
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
      title: `${name} - Playground [Welcome UI]`,
      template: 'node',
      files: {
        'demo.tsx': code,
        'index.html': indexHtml,
        'index.tsx': indexTsx,
        'package.json': packageJson,
        'tsconfig.json': tsConfig,
        'vite.config.ts': viteConfig,
      },
      settings: {
        compile: {
          action: 'npm install && npm run dev',
          trigger: 'auto',
          clearConsole: false,
        },
      },
    },
    {
      openFile: ['demo.tsx'],
    }
  )
}
