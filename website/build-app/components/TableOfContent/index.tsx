import Link from 'next/link'

import { Toc } from '@/build-app/utils/page-tree'

type TableOfContentProps = {
  tree?: Toc[]
}

export const TableOfContent = ({ tree }: TableOfContentProps) => {
  if (!tree) return null

  return (
    <ul style={{ minWidth: 500 }}>
      {tree.map(item => (
        <li key={item.href}>
          <Link href={item.href}>{item.title}</Link>
          {item.children && (
            <ul>
              {item.children.map(child => (
                <li key={child.href}>
                  <Link href={child.href}>{child.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
