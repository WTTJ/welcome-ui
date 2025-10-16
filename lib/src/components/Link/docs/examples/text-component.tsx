import { Link } from '@/components/Link'
import { Text } from '@/components/Text'

const Example = () => {
  return (
    <Text as="h5" variant="heading-sm-strong">
      A text with h5{' '}
      <Link className="[font-weight:inherit]" href="#" target="_blank">
        variant
      </Link>
    </Text>
  )
}

export default Example
