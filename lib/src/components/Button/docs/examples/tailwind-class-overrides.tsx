import { Button } from '@/components/Button'

const Example = () => {
  return (
    <>
      <Button className="mt-(--spacing-md) px-3xl">primary</Button>
      <Button className="mt-(--spacing-md) px-3xl" render={<a />}>
        primary
      </Button>
    </>
  )
}

export default Example
