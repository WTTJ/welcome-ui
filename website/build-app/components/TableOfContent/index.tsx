'use client'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

import { Text } from '@/components/Text'

import type { Toc } from '~/build-app/utils/page-tree'

import * as S from './styles'

type TableOfContentProps = {
  isSubPage?: boolean
  tree?: Toc[]
}

export const TableOfContent = ({ isSubPage, tree }: TableOfContentProps) => {
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
    <div className="hidden xl:block">
      <S.Nav isSubPage={isSubPage}>
        <Text mb="lg" ml="lg" variant="subtitle-sm">
          On this page
        </Text>
        <ul className="flex flex-col gap-lg">
          {tree.map(item => (
            <li className="flex flex-col gap-sm" key={item.href}>
              {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error FIXME */}
              <S.Link
                aria-current={`#${activeId}` === item.href ? 'page' : undefined}
                as={NextLink}
                href={item.href}
                pl="lg"
              >
                {item.title}
              </S.Link>
              {item.children ? (
                <ul className="flex flex-col gap-xs">
                  {item.children.map(child => (
                    <li key={child.href}>
                      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-expect-error FIXME */}
                      <S.Link
                        aria-current={`#${activeId}` === child.href ? 'page' : undefined}
                        as={NextLink}
                        href={child.href}
                        pl="xxl"
                      >
                        {child.title}
                      </S.Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </S.Nav>
    </div>
  )
}
