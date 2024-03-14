import type { Metadata } from 'next'

import StyledComponentsRegistry from '@/build-app/registry'
import { ThemeProvider } from '@/build-app/components/ThemeProvider'
import { Header } from '@/build-app/components/Header'

export const metadata: Metadata = {
  title: 'Welcome UI - Customizable design system with react',
  description:
    'Here you’ll find all the core components you need to create a delightful webapp. Customizable design system from Welcome to the jungle with react, typescript, styled-components, ariakit and a lot of love 💛',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" rel="icon" sizes="32x32" type="image/png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
