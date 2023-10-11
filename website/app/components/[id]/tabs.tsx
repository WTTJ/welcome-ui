'use client'

import { Tab, useTab } from '@welcome-ui/tabs'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { PageTree } from '@/build-app/types'
import { getName } from '@/build-app/utils/transform-name'

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
      backgroundColor="light-900"
      mb="3xl"
      position="sticky"
      pt="xxl"
      store={tab}
      top={70}
      zIndex={1}
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
