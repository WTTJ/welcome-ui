import type { Metadata } from 'next'
import Link from 'next/link'

import StyledComponentsRegistry from '@/build-app/registry'
import { ThemeProvider } from '@/build-app/components/ThemeProvider'

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
            <header>
              <ul style={{ display: 'flex', gap: 10 }}>
                <li>
                  <Link href="/">Logo</Link>
                </li>
                <li>
                  <Link href="/foundations">Foundations</Link>
                </li>
                <li>
                  <Link href="/components">Components</Link>
                </li>
                <li>
                  <Link href="/hooks">Hooks</Link>
                </li>
              </ul>
            </header>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
