import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <Button
      as="a"
      href="https://www.welcometothejungle.com"
      rel="noopener nofollow"
      target="_blank"
    >
      <Icon name="plus" />
      <span>Welcome</span>
    </Button>
  )
}

export default Example
