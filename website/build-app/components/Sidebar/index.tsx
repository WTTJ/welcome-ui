import { ResultsPageTree } from '@/build-app/utils/pages'
import startCase from 'lodash/startCase'
import Link from 'next/link'

type SidebarProps = {
  pages: ResultsPageTree
  pathToPages: string
}

export function Sidebar({ pages, pathToPages }: SidebarProps) {
  return (
    <ul>
      {Object.keys(pages).map((entry: string) => (
        <>
          {pages[entry].length > 1 ? (
            <li>
              {startCase(entry)}
              <ul>
                {Array.from(pages[entry]).map(page => (
                  <li>
                    <Link href={`${pathToPages}/${entry}/${page}`}>{startCase(page)}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li>
              <Link href={`${pathToPages}/${entry}`}>{startCase(entry)}</Link>
            </li>
          )}
        </>
      ))}
    </ul>
  )
}
