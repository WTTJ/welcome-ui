import { Link } from '@/components/Link'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
<<<<<<< HEAD
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
=======
      <Link disabled href="/disabled">
        Primary disabled
      </Link>
      <Link disabled href="/disabled" variant="secondary">
>>>>>>> e30983dcc ([WUI-233] chore(link): belonging update for disabled state (#3017))
        Secondary disabled
      </Link>
    </div>
  )
}

export default Example
