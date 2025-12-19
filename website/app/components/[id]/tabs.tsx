'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { Tabs, useTab } from '@/components/Tabs'

import type { PageTree } from '~/build-app/types'
import { getName } from '~/build-app/utils/transform-name'

type TabListProps = {
  pages: PageTree
}

export const TabList = ({ pages }: TabListProps) => {
  const pathname = usePathname()
  const tab = useTab({ selectedId: pathname.split('/').pop() })
  const { id } = useParams()
  const selectedParent = pages.find(page => page.pages.find(subPage => subPage.id === id))
  const subPages = selectedParent?.pages.filter(page => page.id === id)?.[0]?.subPages

  return (
    <Tabs aria-label="Tabs" className="bg-neutral-10 pb-xl sticky top-70 z-1 pt-xxl" store={tab}>
      <Tabs.Tab
        as={Link}
        href={`/components/${id}`}
        id={id as string}
        key="tabs_navigation_overview"
        store={tab}
      >
        Overview
      </Tabs.Tab>
      {subPages?.map(subPage => (
        <Tabs.Tab
          as={Link}
          href={`/components/${id}/${subPage}`}
          id={subPage}
          key={`tabs_navigation_${subPage}`}
          store={tab}
        >
          {getName(subPage)}
        </Tabs.Tab>
      ))}
    </Tabs>
  )
}
