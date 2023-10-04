import Link from 'next/link'
import { Box } from '@welcome-ui/box'

import { PageTree } from '@/build-app/types'
import { getName } from '@/build-app/utils/transform-name'

type SidebarProps = {
  menu: PageTree
}

export const Sidebar = ({ menu }: SidebarProps) => {
  return (
    <Box
      as="ul"
      h="100vh"
      maxH="calc(100vh - 4.375rem)"
      overflowY="scroll"
      position="sticky"
      pt="xl"
      top={70}
    >
      {menu.map(({ category, pages, parent }) => (
        <>
          {category && <div>{getName(category)}</div>}
          {pages.map(({ id, name, parent: pageParent }) => (
            <li key={`sidebar_${category}_page_${id}`}>
              <Link href={`/${parent}/${pageParent ? `${pageParent}/` : ''}${id}`}>
                {name || getName(id)}
              </Link>
            </li>
          ))}
        </>
      ))}
    </Box>
  )
}
