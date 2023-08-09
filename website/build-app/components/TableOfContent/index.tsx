import { Toc } from '@/build-app/utils/page-tree'
import Link from 'next/link'

type TableOfContentProps = {
  tree?: Toc[]
}

export function TableOfContent({ tree }: TableOfContentProps) {
  if (!tree) return null

  return (
    <ul style={{ minWidth: 500 }}>
      {tree.map(item => (
        <li>
          <Link href={item.href}>{item.title}</Link>
          {item.children && (
            <ul>
              {item.children.map(child => (
                <li>
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
