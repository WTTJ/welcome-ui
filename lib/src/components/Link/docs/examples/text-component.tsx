import { Link } from '@/components/Link'
import { Text } from '@/components/Text'

const Example = () => {
  return (
    <Text variant="h5">
      A text with h5{' '}
      <Link className="[font-weight:inherit]" href="#" target="_blank">
        variant
      </Link>
    </Text>
  )
}

export default Example
