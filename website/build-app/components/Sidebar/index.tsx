'use client'

import { Text } from '@welcome-ui/text'
import { Flex } from '@welcome-ui/flex'
import { usePathname } from 'next/navigation'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

import { PageTree } from '@/build-app/types'
import { getName } from '@/build-app/utils/transform-name'

type SidebarProps = {
  menu: PageTree
  isSubPage?: boolean
  display?: WuiProps['display']
  onClick?: () => void
}

export const Sidebar = ({ display = 'flex', isSubPage, menu, onClick }: SidebarProps) => {
  const currentRoute = usePathname()

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
            {pages.map(({ id, name, parent: pageParent }) => {
              const href = `/${parent}/${pageParent ? `${pageParent}/` : ''}${id}`
              const isCurrent = isSubPage ? currentRoute.startsWith(href) : currentRoute === href

              return (
                <li key={`sidebar_${category}_page_${id}`} onClick={onClick}>
                  <S.Link aria-current={isCurrent ? 'page' : undefined} href={href}>
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
