import { Sidebar } from '@/build-app/components/Sidebar'
import { getDesignPages } from '@/build-app/utils/pages'
import Link from 'next/link'

export default function Page() {
  const pages = getDesignPages()

  return (
    <div>
      <h1>Design</h1>
      <Link href="/">Back Home</Link>
      <Sidebar pages={pages} pathToPages="/design" />
    </div>
  )
}
