import { Link } from '@/components/Link'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Link disabled href="#">
        Primary disabled
      </Link>
      <Link disabled href="#" variant="secondary">
        Secondary disabled
      </Link>
    </div>
  )
}

export default Example
