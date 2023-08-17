import { PageTree } from '@/build-app/types'
import startCase from 'lodash/startCase'
import Link from 'next/link'

type SidebarProps = {
  pages: PageTree
  relativePath: string
}

export function Sidebar({ pages, relativePath }: SidebarProps) {
  return (
    <ul>
      {pages.map(({ category, pages, parent }) => (
        <>
          {category && (
            <>
              <li key={`sidebar_${category}`}>{startCase(category)}</li>
              <ul key={`sidebar_${category}_ul`}>
                {pages.map(page => (
                  <li key={`sidebar_${category}_page_${page}`}>
                    <Link href={`${relativePath}/${parent || category}/${page}`}>
                      {startCase(page)}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {!category && (
            <li key={`sidebar_${pages[0]}`}>
              <Link href={`${relativePath}/${pages[0]}`}>{startCase(pages[0])}</Link>
            </li>
          )}
        </>
      ))}
    </ul>
  )
}
