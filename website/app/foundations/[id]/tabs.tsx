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
  const { id } = useParams()

  const subPages = pages.filter(page => page.category === id)[0]?.pages

  const tab = useTab({ selectedId: pathname.split('/').pop() })

  if (!subPages) return null

  return (
    <Tab.List aria-label="Tabs" store={tab}>
      {subPages.map(subPage => {
        const link = `/foundations/${subPage.parent}/${subPage.id}`

        return (
          <Tab as={Link} href={link} id={subPage.id as string} key={link} store={tab}>
            {getName(subPage.id)}
          </Tab>
        )
      })}
    </Tab.List>
  )
}
