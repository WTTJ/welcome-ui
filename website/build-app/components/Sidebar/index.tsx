'use client'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { Text } from '@old/Text'

import type { PageTree } from '~/build-app/types'
import { getName } from '~/build-app/utils/transform-name'

import * as S from './styles'

type SidebarProps = {
  className?: string
  isSubPage?: boolean
  menu: PageTree
  onClick?: () => void
}

export const Sidebar = ({ className, isSubPage, menu, onClick }: SidebarProps) => {
  const currentRoute = usePathname()
  const { subPage } = useParams()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref && ref.current) {
      const currentElement = ref.current.querySelectorAll('[aria-current="page"]')?.[0]

      if (currentElement) {
        currentElement.scrollIntoView({
          block: 'center',
        })
      }
    }
  }, [ref])

  return (
    <nav
      className={`flex flex-col gap-3xl h-[calc(100vh - 5.5rem)] overflow-y-auto pt-3xl sticky top-[4.375rem] ${className}`}
      ref={ref}
    >
      {menu.map(({ category, pages, parent }) => (
        <ul className="flex flex-col shrink-0" key={`sidebar_${category}`}>
          {category ? (
            <Text mb="lg" variant="subtitle-sm">
              {getName(category)}
            </Text>
          ) : null}
          <ul className="flex flex-col gap-lg">
            {pages.map(({ id, parent: pageParent, title }) => {
              const href = `/${parent}/${pageParent ? `${pageParent}/` : ''}${id}`
              const isCurrent =
                isSubPage && subPage ? currentRoute === `${href}/${subPage}` : currentRoute === href

              return (
                <li key={`sidebar_${category}_page_${id}`} onClick={onClick}>
                  <S.Link aria-current={isCurrent ? 'page' : undefined} href={href}>
                    {title || getName(id)}
                  </S.Link>
                </li>
              )
            })}
          </ul>
        </ul>
      ))}
    </nav>
  )
}
