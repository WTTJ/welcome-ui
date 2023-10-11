'use client'
import { Text } from '@welcome-ui/text'
import { useEffect, useState } from 'react'
import { Flex } from '@welcome-ui/flex'

import * as S from './styles'

import { Toc } from '@/build-app/utils/page-tree'
type TableOfContentProps = {
  tree?: Toc[]
  isSubPage?: boolean
}

export const TableOfContent = ({ isSubPage, tree }: TableOfContentProps) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const ids = tree?.reduce((acc, key) => {
    acc.push(key.id)

    key.children?.map(child => {
      acc.push(child.id)
    })

    return acc
  }, [] as string[])

  useEffect(() => {
    const onScroll = () => {
      if (ids?.length === 0) return null
      const activeId = ids?.find(id => {
        const element = document.getElementById(id)
        if (!element) return false
        const { height, top } = element.getBoundingClientRect()
        return top - height - 118 >= 0
      })

      setActiveId(activeId ?? null)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, tree])

  if (!tree) return null

  return (
    <div>
      <S.Nav isSubPage={isSubPage}>
        <Text mb="lg" ml="lg" variant="subtitle-sm">
          On this page
        </Text>
        <Flex as="ul" direction="column" gap="lg">
          {tree.map(item => (
            <Flex as="li" direction="column" gap="sm" key={item.href}>
              <S.Link
                aria-current={`#${activeId}` === item.href ? 'page' : undefined}
                href={item.href}
                pl="lg"
              >
                {item.title}
              </S.Link>
              {item.children && (
                <Flex as="ul" direction="column" gap="sm">
                  {item.children.map(child => (
                    <li key={child.href}>
                      <S.Link
                        aria-current={`#${activeId}` === child.href ? 'page' : undefined}
                        href={child.href}
                        pl="xl"
                      >
                        {child.title}
                      </S.Link>
                    </li>
                  ))}
                </Flex>
              )}
            </Flex>
          ))}
        </Flex>
      </S.Nav>
    </div>
  )
}
