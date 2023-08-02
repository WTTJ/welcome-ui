import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
