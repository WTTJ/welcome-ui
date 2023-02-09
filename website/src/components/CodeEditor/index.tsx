
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider
} from '@codesandbox/sandpack-react'
import { atomDark } from "@codesandbox/sandpack-themes";
import { Box } from '@welcome-ui/box'

const appFile = `import { createTheme, WuiProvider } from '@welcome-ui/core'
import { welcomeTheme } from '@welcome-ui/themes.welcome'

import Demo from './demo.tsx'

const theme = createTheme(welcomeTheme)

export default function App() {
  return (
    <WuiProvider hasGlobalStyle theme={theme}>
      <Demo />
    </WuiProvider>
  )
}
`

const demoFile = (children) => `import { Button } from '@welcome-ui/button';
import { Stack } from '@welcome-ui/stack';

export default function Demo({ children }) {
  return (
    <Stack spacing="md" alignItems="center" justifyContent="center" minH="100%">
      ${children.trim()}
    </Stack>
  )
}`

export function CodeEditor({ className, children }) {
  const isJSX = className === "language-jsx"

  if (isJSX) {
    return (
      <SandpackProvider
        template="react-ts"
        theme={atomDark}
        files={{
          "App.tsx": {
            code: appFile.trim() + "\n",
          },
          '/demo.tsx': {
            active: true,
            code: demoFile(children).trim() + "\n"
          },
        }}
        customSetup={{
          environment: 'create-react-app',
          dependencies: {
            "@welcome-ui/button": "next",
            "@welcome-ui/core": "next",
            "@welcome-ui/icons": "next",
            "@welcome-ui/stack": "next",
            "@welcome-ui/themes.welcome": "next",
            "@xstyled/styled-components": "^3.7.0",
            "styled-components": "^5.3.6"
          }
        }}
      >
        <SandpackLayout style={{display: 'block'}}>
          <SandpackPreview />
          <SandpackCodeEditor
            showInlineErrors
            wrapContent
          />
        </SandpackLayout>
      </SandpackProvider>
    )
  }

  return children
}
