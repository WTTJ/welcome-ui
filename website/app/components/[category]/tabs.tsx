'use client'

import { Tab, useTab } from '@welcome-ui/tabs'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export function Tabs() {
  const pathname = usePathname()
  const tab = useTab({ selectedId: pathname.split('/').pop() })
  const { category } = useParams()

  return (
    <Tab.List aria-label="Tabs" store={tab}>
      <Tab as={Link} href={`/components/${category}`} store={tab} id={category as string}>
        Overview
      </Tab>
      <Tab store={tab} as={Link} href={`/components/${category}/props`} id="props">
        Props
      </Tab>
    </Tab.List>
  )
}
