import { Button } from '@/components/Button'

const Example = () => {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex gap-sm">
        <Button disabled>primary</Button>
        <Button disabled variant="primary-ai">
          primary-ai
        </Button>
      </div>
      <Button disabled variant="secondary">
        secondary
      </Button>
      <Button disabled variant="tertiary">
        tertiary
      </Button>
    </div>
  )
}

export default Example
