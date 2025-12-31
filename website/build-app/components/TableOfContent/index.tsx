'use client'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

import { Window } from '@/components/Window'
import { classNames } from '@/utils'

import type { Toc } from '~/build-app/utils/page-tree'

import styles from './table-of-content.module.scss'

const cx = classNames(styles)

type TableOfContentProps = {
  tree?: Toc[]
}

export const TableOfContent = ({ tree }: TableOfContentProps) => {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const ids = tree
      ?.reduce((acc, key) => {
        acc.push(key.id)

        key.children?.map(child => {
          acc.push(child.id)
        })

        return acc
      }, [] as string[])
      .reverse()

    // @ts-expect-error FIXME
    const onScroll = () => {
      if (!ids || ids.length === 0) return null

      const activeId = ids.find(id => {
        const element = document.getElementById(id)
        if (!element) return false
        const { top } = element.getBoundingClientRect()
        const { scrollMarginTop } = getComputedStyle(element)
        return top - Number.parseInt(scrollMarginTop) - 40 <= 0
      })

      setActiveId(activeId ?? '')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [tree])

  if (!tree) return null

  return (
    <Window as="nav" className={`h-[calc(100vh-120px)] sticky top-100`}>
      <Window.Header className="sticky top-0 z-1">
        <Window.Header.Title title="On this page" />
      </Window.Header>
      <Window.Body className="px-sm flex flex-col gap-xl overflow-y-auto h-[calc(100%-40px)]">
        <nav>
          <ul className="flex flex-col gap-lg">
            {tree.map(item => (
              <li className="flex flex-col gap-sm" key={item.href}>
                <NextLink
                  aria-current={`#${activeId}` === item.href ? 'page' : undefined}
                  className={cx('link', 'pl-lg')}
                  href={item.href}
                >
                  {item.title}
                </NextLink>
                {item.children ? (
                  <ul className="flex flex-col gap-xs">
                    {item.children.map(child => (
                      <li key={child.href}>
                        <NextLink
                          aria-current={`#${activeId}` === child.href ? 'page' : undefined}
                          className={cx('link', 'pl-xxl')}
                          href={child.href}
                        >
                          {child.title}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </Window.Body>
    </Window>
  )
}
