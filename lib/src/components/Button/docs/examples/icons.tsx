import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <Button>
        <Icon name="wttj" />
        <span>Button</span>
      </Button>
      <Button variant="secondary">
        <Icon name="wttj" />
        <span>Button</span>
      </Button>
      <Button variant="tertiary">
        <Icon name="wttj" />
        <span>Button</span>
      </Button>
      <Button disabled>
        <Icon name="wttj" />
        <span>Button</span>
      </Button>
    </>
  )
}

export default Example
