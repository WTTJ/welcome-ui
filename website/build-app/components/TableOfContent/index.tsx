'use client'
import { Text } from '@welcome-ui/text'
import { Flex } from '@welcome-ui/flex'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

import { Toc } from '@/build-app/utils/page-tree'
type TableOfContentProps = {
  tree?: Toc[]
  isSubPage?: boolean
}

export const TableOfContent = ({ isSubPage, tree }: TableOfContentProps) => {
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
              <S.Link href={item.href} pl="lg">
                {item.title}
              </S.Link>
              {item.children && (
                <Flex as="ul" direction="column" gap="xs">
                  {item.children.map(child => (
                    <li key={child.href}>
                      <S.Link href={child.href} pl="xxl">
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
    </Box>
  )
}
