'use client'
import { useTabStore } from '@ariakit/react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { Window } from '@/components/Window'

import type { PageTree } from '~/build-app/types'
import { getName } from '~/build-app/utils/transform-name'

type TabListProps = {
  pages: PageTree
}

export const TabList = ({ pages }: TabListProps) => {
  const pathname = usePathname()
  const tab = useTabStore({ selectedId: pathname.split('/').pop() })
  const { id } = useParams()
  const selectedParent = pages.find(page => page.pages.find(subPage => subPage.id === id))
  const subPages = selectedParent?.pages.filter(page => page.id === id)?.[0]?.subPages

  return (
    <Window.Header.Tabs store={tab}>
      <Window.Header.Tab
        as={Link}
        href={`/components/${id}`}
        icon="eye"
        id={id as string}
        key="tabs_navigation_overview"
        store={tab}
      >
        Overview
      </Window.Header.Tab>
      {subPages?.map(subPage => (
        <Window.Header.Tab
          as={Link}
          href={`/components/${id}/${subPage}`}
          icon="package"
          id={subPage}
          key={`tabs_navigation_${subPage}`}
          store={tab}
        >
          {getName(subPage)}
        </Window.Header.Tab>
      ))}
    </Window.Header.Tabs>
  )
}
