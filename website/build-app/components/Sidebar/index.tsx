import Link from 'next/link'

import { PageTree } from '@/build-app/types'
import { getName } from '@/build-app/utils/transform-name'

type SidebarProps = {
  menu: PageTree
}

export const Sidebar = ({ menu }: SidebarProps) => {
  return (
    <ul>
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
    </ul>
  )
}
