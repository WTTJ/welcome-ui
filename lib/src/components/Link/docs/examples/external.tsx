import { Link } from '@/components/Link'

const Example = () => {
  return (
    <div className="flex flex-col gap-md">
      <Link href="#" isExternal size="xs" target="_blank">
        External link xs
      </Link>
      <Link href="#" isExternal size="sm" target="_blank">
        External link sm
      </Link>
      <Link href="#" isExternal target="_blank">
        External link md (default)
      </Link>
      <Link href="#" isExternal size="lg" target="_blank">
        External link lg
      </Link>
    </div>
  )
}

export default Example
