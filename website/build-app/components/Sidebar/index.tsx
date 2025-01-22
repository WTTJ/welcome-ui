'use client'
import { Text } from 'welcome-ui/Text'
import { Flex } from 'welcome-ui/Flex'
import { ThemeValues } from 'welcome-ui/theme'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import * as S from './styles'

import { PageTree } from '@/build-app/types'
import { getName } from '@/build-app/utils/transform-name'

type SidebarProps = {
  display?: ThemeValues['display']
  isSubPage?: boolean
  menu: PageTree
  onClick?: () => void
}

export const Sidebar = ({ display = 'flex', isSubPage, menu, onClick }: SidebarProps) => {
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
    <Flex
      as="nav"
      direction="column"
      display={display}
      gap="3xl"
      h="calc(100vh - 5.5rem)"
      overflowY="scroll"
      position="sticky"
      pt="3xl"
      ref={ref}
      top={70}
    >
      {menu.map(({ category, pages, parent }) => (
        <Flex as="ul" direction="column" flexShrink={0} key={`sidebar_${category}`}>
          {category && (
            <Text mb="lg" variant="subtitle-sm">
              {getName(category)}
            </Text>
          )}
          <Flex as="ul" direction="column" gap="lg">
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
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}
