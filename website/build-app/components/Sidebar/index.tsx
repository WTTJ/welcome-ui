import { PageTree } from '@/build-app/types'
import startCase from 'lodash/startCase'
import Link from 'next/link'

type SidebarProps = {
  menu: PageTree
}

export function Sidebar({ menu }: SidebarProps) {
  return (
    <ul>
      {menu.map(({ pages, category, parent }) => (
        <>
          {category && <div>{startCase(category)}</div>}
          {pages.map(({ id, parent: pageParent }) => (
            <li key={`sidebar_${category}_page_${id}`}>
              <Link href={`/${parent}/${pageParent ? `${pageParent}/` : ''}${id}`}>
                {startCase(id)}
              </Link>
            </li>
          ))}
        </>
      ))}
    </ul>
  )
}
