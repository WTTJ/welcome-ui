import { Link } from '@/components/Link'

const Example = () => {
  return (
    <div className="flex flex-col gap-lg">
      <Link href="#" size="xs">
        X-Small
      </Link>
      <Link href="#" size="sm">
        Small
      </Link>
      <Link href="#">Medium (default)</Link>
      <Link href="#" size="lg">
        Large
      </Link>
    </div>
  )
}

export default Example
