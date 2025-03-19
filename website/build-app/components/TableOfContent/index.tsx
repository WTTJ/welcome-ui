'use client'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

import { Box } from '@/Box'
import { Flex } from '@/Flex'
import { Text } from '@/Text'

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
    <Box display={{ _: 'none', xl: 'block' }}>
      <S.Nav isSubPage={isSubPage}>
        <Text mb="lg" ml="lg" variant="subtitle-sm">
          On this page
        </Text>
        <Flex as="ul" direction="column" gap="lg">
          {tree.map(item => (
            <Flex as="li" direction="column" gap="sm" key={item.href}>
              <S.Link
                aria-current={`#${activeId}` === item.href ? 'page' : undefined}
                as={NextLink}
                href={item.href}
                pl="lg"
              >
                {item.title}
              </S.Link>
              {item.children && (
                <Flex as="ul" direction="column" gap="xs">
                  {item.children.map(child => (
                    <Box as="li" key={child.href}>
                      <S.Link
                        aria-current={`#${activeId}` === child.href ? 'page' : undefined}
                        as={NextLink}
                        href={child.href}
                        pl="xxl"
                      >
                        {child.title}
                      </S.Link>
                    </Box>
                  ))}
                </Flex>
              )}
            </Flex>
          ))}
        </Flex>
      </S.Nav>
    </Box>
  )
}
