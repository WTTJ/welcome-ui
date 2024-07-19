import type { Metadata } from 'next'

import StyledComponentsRegistry from '@/build-app/registry'
import { ThemeProvider } from '@/build-app/components/ThemeProvider'
import { Header } from '@/build-app/components/Header'
import { getPages } from '@/build-app/utils/pages-components'
import { getPages as getPagesExport } from '@/build-app/utils/pages-exports'
import { Footer } from '@/build-app/components/Footer'
import '@welcome-ui/icons.font/fonts/welcome-icon-font.css'
import './global.css'

export const metadata: Metadata = {
  title: 'Welcome UI - Customizable design system with react',
  description:
    'Here you’ll find all the core components you need to create a delightful webapp. Customizable design system from Welcome to the jungle with react, typescript, styled-components, ariakit and a lot of love 💛',
  openGraph: {
    images: 'https://www.welcome-ui.com/og-image.png',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pagesComponents = getPages()
  const pagesFoundations = getPagesExport('foundations')

  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" rel="icon" sizes="32x32" type="image/png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header components={pagesComponents} foundations={pagesFoundations} />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
