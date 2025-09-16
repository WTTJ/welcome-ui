import { Button } from '../../index'

const Example = () => {
  return (
    <>
      <Button>primary</Button>
      <Button className="mt-3xl" variant="secondary">
        secondary
      </Button>
      <Button variant="tertiary">tertiary</Button>
      <Button variant="ghost">ghost</Button>
    </>
  )
}

export default Example
