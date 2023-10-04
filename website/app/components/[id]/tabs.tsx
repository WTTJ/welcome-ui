'use client'

import { Tab, useTab } from '@welcome-ui/tabs'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export const Tabs = () => {
  const pathname = usePathname()
  const tab = useTab({ selectedId: pathname.split('/').pop() })
  const { id } = useParams()

  return (
    <Tab.List
      aria-label="Tabs"
      backgroundColor="light-900"
      mb="xl"
      position="sticky"
      store={tab}
      top={70}
      zIndex={1}
    >
      <Tab as={Link} href={`/components/${id}`} id={id as string} store={tab}>
        Overview
      </Tab>
      <Tab as={Link} href={`/components/${id}/props`} id="props" store={tab}>
        Props
      </Tab>
    </Tab.List>
  )
}
