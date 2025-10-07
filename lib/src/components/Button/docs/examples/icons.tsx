import { Button } from '@/components/Button'
import { AddIcon } from '@/components/Icon'

const Example = () => {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md">
        <Button>
          <AddIcon />
          <span>Button</span>
        </Button>
        <Button variant="secondary">
          <AddIcon />
          <span>Button</span>
        </Button>
        <Button variant="tertiary">
          <AddIcon />
          <span>Button</span>
        </Button>
        <Button disabled>
          <AddIcon />
          <span>Button</span>
        </Button>
      </div>
      <div className="flex gap-md">
        <Button size="sm">
          <AddIcon />
          <span>Small</span>
        </Button>
        <Button size="md">
          <AddIcon />
          <span>Medium</span>
        </Button>
      </div>
    </div>
  )
}

export default Example
