import { Toc } from '@/build-app/utils/page-tree'
import Link from 'next/link'

type TableOfContentProps = {
  tree?: Toc[]
}

export function TableOfContent({ tree }: TableOfContentProps) {
  if (!tree) return null

  return (
    <ul>
      {tree.map(item => (
        <li>
          <Link href={item.href}>{item.title}</Link>
          {item.children && (
            <ul>
              {item.children.map(child => (
                <Link href={child.href}>{child.title}</Link>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
