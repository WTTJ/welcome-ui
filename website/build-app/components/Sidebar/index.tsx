import { PageTree } from '@/build-app/types'
import { getName } from '@/build-app/utils/transform-name'

import Link from 'next/link'

type SidebarProps = {
  menu: PageTree
}

export function Sidebar({ menu }: SidebarProps) {
  return (
    <ul>
      {menu.map(({ pages, category, parent }) => (
        <>
          {category && <div>{getName(category)}</div>}
          {pages.map(({ id, parent: pageParent, name }) => (
            <li key={`sidebar_${category}_page_${id}`}>
              <Link href={`/${parent}/${pageParent ? `${pageParent}/` : ''}${id}`}>
                {name || getName(id)}
              </Link>
            </li>
          ))}
        </>
      ))}
    </ul>
  )
}
