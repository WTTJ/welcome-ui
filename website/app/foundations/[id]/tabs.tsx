'use client'
import { useTabStore } from '@ariakit/react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { Window } from '@/components/Window'

import type { PageTree } from '~/build-app/types'
import { getName } from '~/build-app/utils/transform-name'

type TabListProps = {
  pages: PageTree
  title: string
}

export const TabList = ({ pages, title }: TabListProps) => {
  const pathname = usePathname()
  const { id } = useParams()

  const subPages = pages.filter(page => page.category === id)[0]?.pages

  const tab = useTabStore({ selectedId: pathname.split('/').pop() })

  if (!subPages) {
    return <Window.Header.Title title={title} />
  }

  return (
    <Window.Header.Tabs store={tab}>
      {subPages.map(subPage => {
        const link = `/foundations/${subPage.parent}/${subPage.id}`

        return (
          <Window.Header.Tab
            as={Link}
            href={link}
            icon="package"
            id={subPage.id as string}
            key={link}
            store={tab}
          >
            {getName(subPage.id)}
          </Window.Header.Tab>
        )
      })}
    </Window.Header.Tabs>
  )
}
