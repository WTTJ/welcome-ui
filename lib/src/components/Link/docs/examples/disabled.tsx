import { Link } from '@/components/Link'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
<<<<<<< HEAD
      <Link disabled href="/disabled">
        Primary disabled
      </Link>
      <Link disabled href="/disabled" variant="secondary">
=======
      <Link disabled href="#">
        Primary disabled
      </Link>
      <Link disabled href="#" variant="secondary">
>>>>>>> 23a43ee7f (chore(link): belonging design)
        Secondary disabled
      </Link>
    </div>
  )
}

export default Example
