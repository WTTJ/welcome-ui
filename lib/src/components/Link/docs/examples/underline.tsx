import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Link className="flex flex-row gap-xs" href="#">
        <Avatar
          name="jungle"
          size="lg"
          src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
        />
        This is a text node
      </Link>
      <Link className="flex flex-row gap-xs" href="#">
        <Avatar name="jungle" size="lg" />
        <span>This is a text in a span tag</span>
      </Link>
      <Link className="flex flex-row gap-xs" href="#">
        <Avatar name="jungle" size="lg" />
        <Text>This is a text in a Text component</Text>
      </Link>
      <Link className="flex flex-row gap-xs" href="#">
        <Avatar name="jungle" size="lg" />
        <div>This is a text in a div tag</div>
      </Link>
      <Link className="flex flex-row gap-xs" href="#">
        <Avatar name="jungle" size="lg" />
        <Text as="span">This is a Text component as span</Text>
      </Link>
    </div>
  )
}

export default Example
