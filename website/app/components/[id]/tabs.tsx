'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { Tab, useTab } from '@/components/Tabs'

import type { PageTree } from '~/build-app/types'
import { getName } from '~/build-app/utils/transform-name'

type TabsProps = {
  pages: PageTree
}

export const Tabs = ({ pages }: TabsProps) => {
  const pathname = usePathname()
  const tab = useTab({ selectedId: pathname.split('/').pop() })
  const { id } = useParams()
  const selectedParent = pages.find(page => page.pages.find(subPage => subPage.id === id))
  const subPages = selectedParent?.pages.filter(page => page.id === id)?.[0]?.subPages

  return (
    <Tab.List
      aria-label="Tabs"
      className="bg-neutral-10 mb-xl position-sticky top-70 z-1 pt-xxl"
      store={tab}
    >
      <Tab
        as={Link}
        href={`/components/${id}`}
        id={id as string}
        key="tabs_navigation_overview"
        store={tab}
      >
        Overview
      </Tab>
      {subPages?.map(subPage => (
        <Tab
          as={Link}
          href={`/components/${id}/${subPage}`}
          id={subPage}
          key={`tabs_navigation_${subPage}`}
          store={tab}
        >
          {getName(subPage)}
        </Tab>
      ))}
    </Tab.List>
  )
}
