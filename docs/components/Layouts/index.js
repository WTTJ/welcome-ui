import * as React from 'react'
import { useRouter } from 'next/router'
import { Box } from '@welcome-ui/box'

import { Header } from '../Header'

import { DocsLayout } from './Docs'

function Layout({ children }) {
  const { pathname } = useRouter()
  const isSimpleLayout = pathname === '/' || pathname === '/blog'

  if (isSimpleLayout) {
    return children
  }

  const layoutMap = {
    // example for specific page
    // components: <YourLayout>{children}</YourLayout>,
    default: <DocsLayout>{children}</DocsLayout>,
  }

  const layout = Object.entries(layoutMap).find(([path]) => {
    return pathname?.startsWith(path)
  })

  if (!layout) return layoutMap.default

  return layout[1]
}

export function Layouts({ children }) {
  return (
    <Box backgroundColor="neutral-white">
      <Header />
      <Layout>{children}</Layout>
    </Box>
  )
}
