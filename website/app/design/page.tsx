import { getDesignPages } from '@/build-app/utils/pages'
import Link from 'next/link'

export default function Page() {
  const pages = getDesignPages()
  console.log(pages)
  return (
    <div>
      Design Home
      <ul>
        <li>
          <Link href="design/components/button">Button</Link>
        </li>
        <li>
          <Link href="design/foundations/design-tokens">Design Tokens</Link>
        </li>
      </ul>
    </div>
  )
}
