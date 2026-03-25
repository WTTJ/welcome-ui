import { Button } from '@/components/Button'

const Example = () => {
  return (
    <>
      <Button className="nine:mt-(--nine-spacing-md) nine:px-3xl">primary</Button>
      <Button as="a" className="nine:mt-[100px] nine:px-3xl">
        primary
      </Button>
    </>
  )
}

export default Example
