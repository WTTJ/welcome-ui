import type { Metadata } from 'next'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Box } from '@/Box'
import { Notifications } from '@/Toast'

import StyledComponentsRegistry from '~/build-app/registry'
import { ThemeProvider } from '~/build-app/components/ThemeProvider'
import { Header } from '~/build-app/components/Header'
import { getPages } from '~/build-app/utils/pages-components'
import { getPages as getPagesExport } from '~/build-app/utils/pages-exports'
import { Footer } from '~/build-app/components/Footer'

import '@/IconsFont/fonts/welcome-icon-font.css'
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
        <link href="/favicon.png" rel="icon" type="image/png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <NextThemeProvider>
            <ThemeProvider>
              <Box backgroundColor="neutral-10">
                <Header components={pagesComponents} foundations={pagesFoundations} />
                <Notifications />
                {children}
                <Footer />
              </Box>
            </ThemeProvider>
          </NextThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
