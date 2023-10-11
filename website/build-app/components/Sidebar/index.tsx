'use client'

import { Text } from '@welcome-ui/text'
import { Flex } from '@welcome-ui/flex'
import { usePathname } from 'next/navigation'

import * as S from './styles'

import { PageTree } from '@/build-app/types'
import { getName } from '@/build-app/utils/transform-name'

type SidebarProps = {
  menu: PageTree
}

export const Sidebar = ({ menu }: SidebarProps) => {
  const currentRoute = usePathname()

  return (
    <Flex
      as="nav"
      direction="column"
      gap="3xl"
      h="100vh"
      maxH="calc(100vh - 4.375rem)"
      overflowY="scroll"
      position="sticky"
      pt="3xl"
      top={70}
    >
      {menu.map(({ category, pages, parent }) => (
        <Flex as="ul" direction="column" key={`sidebar_${category}`}>
          {category && (
            <Text mb="lg" variant="subtitle-sm">
              {getName(category)}
            </Text>
          )}
          <Flex as="ul" direction="column" gap="lg">
            {pages.map(({ id, name, parent: pageParent }) => {
              const href = `/${parent}/${pageParent ? `${pageParent}/` : ''}${id}`

              return (
                <li key={`sidebar_${category}_page_${id}`}>
                  <S.Link aria-current={currentRoute === href ? 'page' : undefined} href={href}>
                    {name || getName(id)}
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
