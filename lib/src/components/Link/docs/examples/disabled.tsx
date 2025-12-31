import { Link } from '@/components/Link'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Link disabled href="/disabled">
        Primary disabled
      </Link>
      <Link disabled href="/disabled" variant="secondary">
        Secondary disabled
      </Link>
    </div>
  )
}

export default Example
