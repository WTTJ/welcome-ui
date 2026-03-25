import { Link } from '@/components/Link'

const Example = () => {
  return (
    <div className="nine:flex nine:flex-col nine:gap-xl">
      <Link href="#">Primary</Link>
      <Link href="#" variant="secondary">
        Secondary
      </Link>
    </div>
  )
}

export default Example
