import Link from 'next/link'
import { Box } from '@welcome-ui/box'

import { Toc } from '@/build-app/utils/page-tree'

type TableOfContentProps = {
  tree?: Toc[]
}

export const TableOfContent = ({ tree }: TableOfContentProps) => {
  if (!tree) return null

  return (
    <nav>
      <Box as="ul" position="sticky" top={140}>
        {tree.map(item => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
            {item.children && (
              <Box as="ul" paddingLeft="xl">
                {item.children.map(child => (
                  <li key={child.href}>
                    <Link href={child.href}>{child.title}</Link>
                  </li>
                ))}
              </Box>
            )}
          </li>
        ))}
      </Box>
    </nav>
  )
}
