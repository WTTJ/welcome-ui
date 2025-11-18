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
@import 'welcome-ui/theme.css';`

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
