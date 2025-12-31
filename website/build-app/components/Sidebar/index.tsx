'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { Badge } from '@/components/Badge'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import type { PageTree } from '~/build-app/types'
import { getName } from '~/build-app/utils/transform-name'

import styles from './sidebar.module.scss'

const cx = classNames(styles)

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
            <Text className="mb-lg" variant="label-md">
              {getName(category)}
            </Text>
          ) : null}
          <ul className="flex flex-col gap-lg">
            {pages.map(({ id, isNew, parent: pageParent, title }) => {
              const href = `/${parent}/${pageParent ? `${pageParent}/` : ''}${id}`
              const isCurrent =
                isSubPage && subPage ? currentRoute === `${href}/${subPage}` : currentRoute === href

              return (
                <li
                  className="flex items-center gap-sm"
                  key={`sidebar_${category}_page_${id}`}
                  onClick={onClick}
                >
                  <Link
                    aria-current={isCurrent ? 'page' : undefined}
                    className={cx('link')}
                    href={href}
                  >
                    {title || getName(id)}
                  </Link>
                  {isNew ? <Badge variant="brand">NEW</Badge> : null}
                </li>
              )
            })}
          </ul>
        </ul>
      ))}
    </nav>
  )
}
