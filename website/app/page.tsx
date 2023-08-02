import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <Link href="/design">Design</Link>
      <Link href="/docs">Docs (dev)</Link>
    </div>
  )
}
