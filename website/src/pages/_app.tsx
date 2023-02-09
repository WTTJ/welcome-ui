import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

import { CodeEditor } from '@/components/CodeEditor'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { Text } from '@welcome-ui/text'
import { welcomeTheme } from '@welcome-ui/themes.welcome'


const theme = createTheme(welcomeTheme)

const components = {
  h1: (props) => <Text variant="h1" {...props} />,
  h2: (props) => <Text variant="h3" forwardedAs="h2" {...props} />,
  h3: (props) => <Text variant="h4" forwardedAs="h3" {...props} />,
  code: (props) => <CodeEditor {...props} />,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WuiProvider hasGlobalStyle theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </WuiProvider>
  )
}
