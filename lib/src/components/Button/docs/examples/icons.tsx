import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <div className="flex gap-md">
        <Button>
          <Icon name="plus" />
          <span>Button</span>
        </Button>
        <Button variant="secondary">
          <Icon name="plus" />
          <span>Button</span>
        </Button>
        <Button variant="tertiary">
          <Icon name="plus" />
          <span>Button</span>
        </Button>
        <Button disabled>
          <Icon name="plus" />
          <span>Button</span>
        </Button>
      </div>

      <div className="flex gap-md items-center">
        <Button>
          <Icon name="plus" />
        </Button>
        <Button size="md">
          <Icon name="plus" />
        </Button>
        <Button size="sm">
          <Icon name="plus" />
        </Button>
      </div>
    </div>
  )
}

export default Example
