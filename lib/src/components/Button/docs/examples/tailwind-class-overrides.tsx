import { Button } from '@/components/Button'

const Example = () => {
  return (
    <>
      <Button className="mt-(--spacing-md) px-3xl">primary</Button>
      <Button as="a" className="mt-[100px] px-3xl">
        primary
      </Button>
    </>
  )
}

export default Example
