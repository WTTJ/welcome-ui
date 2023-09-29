'use client'

import { Tab, useTab } from '@welcome-ui/tabs'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export function Tabs() {
  const pathname = usePathname()
  const tab = useTab({ selectedId: pathname.split('/').pop() })
  const { id } = useParams()

  return (
    <Tab.List aria-label="Tabs" store={tab}>
      <Tab as={Link} href={`/components/${id}`} store={tab} id={id as string}>
        Overview
      </Tab>
      <Tab store={tab} as={Link} href={`/components/${id}/props`} id="props">
        Props
      </Tab>
    </Tab.List>
  )
}
