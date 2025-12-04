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
  const { id } = useParams()

  const subPages = pages.filter(page => page.category === id)[0]?.pages

  const tab = useTab({ selectedId: pathname.split('/').pop() })

  if (!subPages) return null

  return (
    <Tabs aria-label="Tabs" className="bg-neutral-10 mb-xl sticky top-70 z-1 pt-xxl" store={tab}>
      {subPages.map(subPage => {
        const link = `/foundations/${subPage.parent}/${subPage.id}`

        return (
          <Tabs.Tab as={Link} href={link} id={subPage.id as string} key={link} store={tab}>
            {getName(subPage.id)}
          </Tabs.Tab>
        )
      })}
    </Tabs>
  )
}
