import { Link } from '@/Link'
import { Text } from '@/Text'

const Example = () => {
  return (
    <Text variant="h5">
      A text with h5{' '}
      <Link fontWeight="inherit" href="#" target="_blank">
        variant
      </Link>
    </Text>
  )
}

export default Example
