import { Button } from '@/components/Button'

const Example = () => {
  return (
    <div>
      Primary
      <div className="flex gap-sm">
        <Button disabled>primary</Button>
        <Button disabled variant="primary-neutral">
          primary-neutral
        </Button>
        <Button disabled variant="primary-ai">
          primary-ai
        </Button>
        <Button disabled variant="primary-danger">
          primary-danger
        </Button>
      </div>
      Secondary
      <div className="flex gap-sm">
        <Button disabled variant="secondary">
          secondary
        </Button>
        <Button disabled variant="secondary-danger">
          secondary-danger
        </Button>
      </div>
      Tertiary
      <div className="flex gap-sm">
        <Button disabled variant="tertiary">
          tertiary
        </Button>
        <Button disabled variant="tertiary-danger">
          tertiary-danger
        </Button>
      </div>
    </div>
  )
}

export default Example
