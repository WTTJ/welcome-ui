import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/build-app/registry'
import { ThemeProvider } from '@/build-app/components/ThemeProvider'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Welcome UI - Customizable design system with react',
  description:
    'Here you’ll find all the core components you need to create a delightful webapp. Customizable design system from Welcome to the jungle with react, typescript, styled-components, ariakit and a lot of love 💛',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <header>
              <ul style={{ display: 'flex', gap: 10 }}>
                <li>
                  <Link href="/">Home</Link>
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
